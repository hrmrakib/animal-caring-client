import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOISTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const CreateDonationCampaign = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const email = user?.email;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const {
      name,
      image,
      lastDate,
      maxDonationAmount,
      shortDescription,
      longDescription,
    } = data;

    const imageFile = { image: data.petPicture[0] };

    console.log(imageFile);

    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      const donationInfo = {
        name,
        email,
        lastDate,
        maxDonationAmount,
        shortDescription,
        longDescription,
        image: res.data.data.display_url,
      };

      const donationRes = await axiosSecure.post(
        "/create-donation-campaign",
        donationInfo
      );

      console.log(email, donationRes.data);

      if (donationRes.data.insertedId) {
        // show success popup

        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Created new donation campaign!`,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    }
    console.log("with image url", res.data);
  };

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-semibold mb-8 dark:text-gray-100'>
        Create Donation Campaign
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='bg-white p-6 rounded-lg shadow-md dark:bg-gray-900'
      >
        {/* Pet Name */}
        <div className='mb-4'>
          <label
            className='block text-gray-700 mb-2 dark:text-gray-100'
            htmlFor='name'
          >
            Pet Name
          </label>
          <input
            type='text'
            id='name'
            {...register("name", { required: true })}
            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-white'
          />
          {errors.name && (
            <span className='text-red-600 font-medium'>
              Pet name is required
            </span>
          )}
        </div>
        {/* Pet Picture */}
        <div className='mb-4'>
          <label
            className='block text-gray-700 mb-2 dark:text-gray-100'
            htmlFor='petPicture'
          >
            Pet Picture
          </label>
          <input
            type='file'
            id='petPicture'
            {...register("petPicture", { required: true })}
            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-white'
          />
          {errors.petPicture && (
            <span className='text-red-600 font-medium'>
              Pet image is required
            </span>
          )}
        </div>

        {/* Maximum Donation Amount */}
        <div className='mb-4'>
          <label
            className='block text-gray-700 mb-2 dark:text-gray-100'
            htmlFor='maxDonationAmount'
          >
            Maximum Donation Amount
          </label>
          <input
            type='number'
            id='maxDonationAmount'
            {...register("maxDonationAmount", { required: true })}
            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-white'
          />
          {errors.maxDonationAmount && (
            <span className='text-red-600 font-medium'>
              MaxDonationAmount is required
            </span>
          )}
        </div>

        {/* Last Date of Donation */}
        <div className='mb-4'>
          <label
            className='block text-gray-700 mb-2 dark:text-gray-100'
            htmlFor='lastDate'
          >
            Last Date of Donation
          </label>
          <input
            type='date'
            id='lastDate'
            {...register("lastDate", { required: true })}
            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-white'
          />
          {errors.lastDate && (
            <span className='text-red-600 font-medium'>
              Donation's last date is required
            </span>
          )}
        </div>

        {/* Short Description */}
        <div className='mb-4'>
          <label
            className='block text-gray-700 mb-2 dark:text-gray-100'
            htmlFor='shortDescription'
          >
            Short Description
          </label>
          <input
            type='text'
            id='shortDescription'
            {...register("shortDescription", { required: true })}
            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-white'
          />
          {errors.shortDescription && (
            <span className='text-red-600 font-medium'>
              Pet short is required
            </span>
          )}
        </div>

        {/* Long Description */}
        <div className='mb-4'>
          <label
            className='block text-gray-700 mb-2 dark:text-gray-100'
            htmlFor='longDescription'
          >
            Long Description
          </label>
          <textarea
            id='longDescription'
            {...register("longDescription", { required: true })}
            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-white'
            rows='6'
          />
          {errors.longDescription && (
            <span className='text-red-600 font-medium'>
              Pet description is required
            </span>
          )}
        </div>

        {/* Submit Button */}
        <div className='text-right'>
          <button
            type='submit'
            className='px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition'
          >
            Create Campaign
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateDonationCampaign;
