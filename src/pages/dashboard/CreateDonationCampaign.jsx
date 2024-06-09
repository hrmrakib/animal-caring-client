import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOISTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const CreateDonationCampaign = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const { lastDate, maxDonationAmount, shortDescription, longDescription } =
      data;

    const imageFile = { image: data.petPicture[0] };

    // console.log(imageFile);

    // TODO: remove after testing
    if (true) {
      return;
    }

    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      const userDetail = {
        name: data.name,
        email: data.email,
        role: "user",
        password: data.password,
        image: res.data.data.display_url,
      };

      createUser(email, password)
        .then(async (userCredential) => {
          const user = userCredential.user;
          console.log(user);

          await updateProfile(user, {
            displayName: name,
            photoURL: res.data.data.display_url,
          });
        })
        .then(() => {
          setUser({
            displayName: name,
            photoURL: res.data.data.display_url,
            email: email,
          });
        });

      const menuRes = await axiosSecure.post("/users", userDetail);

      console.log(menuRes.data);

      if (menuRes.data.insertedId) {
        // show success popup
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is an user now!`,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      }
    }
    console.log("with image url", res.data);
  };

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-semibold mb-8'>Create Donation Campaign</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='bg-white p-6 rounded-lg shadow-md'
      >
        {/* Pet Picture */}
        <div className='mb-4'>
          <label className='block text-gray-700 mb-2' htmlFor='petPicture'>
            Pet Picture
          </label>
          <input
            type='file'
            id='petPicture'
            {...register("petPicture", { required: true })}
            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
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
            className='block text-gray-700 mb-2'
            htmlFor='maxDonationAmount'
          >
            Maximum Donation Amount
          </label>
          <input
            type='number'
            id='maxDonationAmount'
            {...register("maxDonationAmount", { required: true })}
            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          {errors.maxDonationAmount && (
            <span className='text-red-600 font-medium'>
              MaxDonationAmount is required
            </span>
          )}
        </div>

        {/* Last Date of Donation */}
        <div className='mb-4'>
          <label className='block text-gray-700 mb-2' htmlFor='lastDate'>
            Last Date of Donation
          </label>
          <input
            type='date'
            id='lastDate'
            {...register("lastDate", { required: true })}
            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
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
            className='block text-gray-700 mb-2'
            htmlFor='shortDescription'
          >
            Short Description
          </label>
          <input
            type='text'
            id='shortDescription'
            {...register("shortDescription", { required: true })}
            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          {errors.shortDescription && (
            <span className='text-red-600 font-medium'>
              Pet short is required
            </span>
          )}
        </div>

        {/* Long Description */}
        <div className='mb-4'>
          <label className='block text-gray-700 mb-2' htmlFor='longDescription'>
            Long Description
          </label>
          <textarea
            id='longDescription'
            {...register("longDescription", { required: true })}
            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
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
