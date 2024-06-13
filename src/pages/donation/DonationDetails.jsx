import React, { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useLoaderData, useNavigate } from "react-router-dom";
// payment
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_API_KEY);
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";

const DonationForm = ({ amount, setAmount, closeModal }) => {
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const [transactionId, setTransactionId] = useState("");
  const { user } = useAuth();
  const navigate = useNavigate();

  // call twice in a page but different component
  const donationDetails = useLoaderData();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    try {
      const { data } = await axiosSecure.post("/create-payment-intent", {
        amount: parseInt(amount),
      });

      console.log({ data });

      const { clientSecret } = data;

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      console.log({ result });

      if (result.error) {
        console.error(result.error.message);
      } else {
        if (result.paymentIntent.status === "succeeded") {
          console.log("Payment successful!");
          console.log(result.paymentIntent.id);
          setTransactionId(result.paymentIntent.id);

          const donation = {
            name: user?.displayName,
            email: user?.email,
            image: donationDetails?.image,
            donation: amount,
            refund: false,
            transactionId: result.paymentIntent.id,
            date: new Date(),
            petId: donationDetails?._id,
          };

          const res = await axiosSecure.post("/payments", donation);
          console.log("payment saved", res.data);

          if (res.data?.insertedId) {
            closeModal();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Thank you for Donate",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/dashboard/myDonations");
          }
        }
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className='mb-4'>
        <label className='block text-gray-700'>Donation Amount</label>
        <input
          type='number'
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
          className='w-full px-3 py-2 border rounded'
        />
      </div>
      <div className='mb-4'>
        <label className='block text-gray-700'>Credit Card Details</label>
        <div className='w-full px-3 py-2 border rounded'>
          <CardElement />
        </div>
      </div>
      <button
        type='submit'
        disabled={!stripe}
        className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
      >
        Submit Donation
      </button>
    </form>
  );
};

const DonationDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [amount, setAmount] = useState("");
  const donationDetails = useLoaderData();
  const axiosSecure = useAxiosSecure();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // const recommendedDonations = [
  //   {
  //     id: 1,
  //     petName: "Mittens",
  //     petImage: "https://i.ibb.co/JQnq9yT/pexels-rdne-7516109.jpg",
  //   },
  //   {
  //     id: 2,
  //     petName: "Charlie",
  //     petImage: "https://i.ibb.co/7JM1P2r/pexels-7.jpg",
  //   },
  //   {
  //     id: 3,
  //     petName: "Max",
  //     petImage: "https://i.ibb.co/JQnq9yT/pexels-rdne-7516109.jpg",
  //   },
  // ];

  const { data: recommendedDonations = [], refetch } = useQuery({
    queryKey: ["recommendedDonations"],
    queryFn: async () => {
      const res = await axiosSecure.get("/donations");
      return res.data;
    },
  });

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-semibold mb-8'>Donation Details</h1>

      {/* pet detail */}
      <div className='p-5 bg-white shadow-md rounded-lg overflow-hidden'>
        <div className='flex gap-5'>
          <img
            src={donationDetails?.image}
            alt={donationDetails?.name}
            className='w-[500px] h-64 object-fill'
          />
          <div>
            <h2 className='text-2xl font-semibold mb-4'>
              {donationDetails?.name}
            </h2>
            <p className='text-gray-700 mb-4'>
              {donationDetails?.shortDescription}
            </p>
            <p className='text-gray-700 mb-6'>
              {donationDetails?.longDescription}
            </p>
          </div>
        </div>
        <div className='px-10 py-20'>
          <div className='mb-8'>
            <div className='relative pt-1'>
              <div className='overflow-hidden h-4 mb-4 text-xs flex rounded bg-blue-200'>
                <div
                  style={{
                    width: `${
                      (donationDetails?.getDonationAmount /
                        donationDetails?.maxDonationAmount) *
                      100
                    }%`,
                  }}
                  className='shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500'
                ></div>
              </div>
              <span className='text-xs font-semibold inline-block text-blue-600'>
                ${donationDetails?.getDonationAmount} / $
                {donationDetails.maxDonationAmount}
              </span>
            </div>
          </div>
          <button
            onClick={openModal}
            className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
          >
            Donate Now
          </button>
        </div>
      </div>

      {/* recommended donations */}
      <div className='mt-8'>
        <h3 className='text-xl font-semibold mb-4'>Recommended Donations</h3>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          {recommendedDonations.map((donation) => (
            <div
              key={donation._id}
              className='bg-white shadow-md rounded-lg overflow-hidden'
            >
              <img
                src={donation?.image}
                alt={donation?.name}
                className='w-full h-48 object-cover'
              />
              <div className='p-4'>
                <h4 className='text-lg font-semibold mb-2'>{donation?.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* donation modal  */}
      <Elements stripe={stripePromise}>
        <Transition show={isModalOpen} as={React.Fragment}>
          <Dialog
            onClose={closeModal}
            className='fixed inset-0 flex items-center justify-center z-50'
          >
            <div className='bg-black bg-opacity-50 fixed inset-0' />
            <div className='bg-white rounded-lg p-6 w-full max-w-lg mx-auto z-10'>
              <Dialog.Title className='text-xl font-semibold mb-4'>
                Donate to {donationDetails.name}
              </Dialog.Title>
              <DonationForm
                amount={amount}
                setAmount={setAmount}
                closeModal={closeModal}
              />
            </div>
          </Dialog>
        </Transition>
      </Elements>
    </div>
  );
};

export default DonationDetails;
