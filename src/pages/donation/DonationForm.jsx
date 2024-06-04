import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const DonationForm = ({ campaignId, closeModal }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [amount, setAmount] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.error(error);
    } else {
      // Process the payment (this is a mock example, replace with actual backend call)
      console.log("Payment successful:", paymentMethod);

      const donationData = {
        campaignId,
        amount,
        paymentMethodId: paymentMethod.id,
      };

      // Replace with actual backend call to save donationData
      console.log("Donation Data:", donationData);

      closeModal();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='mb-4'>
        <label className='block text-gray-700'>Donation Amount</label>
        <input
          type='number'
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
          className='mt-1 p-2 w-full border border-gray-300 rounded'
        />
      </div>
      <div className='mb-4'>
        <label className='block text-gray-700'>Credit Card Details</label>
        <CardElement className='p-2 border border-gray-300 rounded' />
      </div>
      <button
        type='submit'
        className='w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200'
        disabled={!stripe}
      >
        Donate
      </button>
    </form>
  );
};

export default DonationForm;
