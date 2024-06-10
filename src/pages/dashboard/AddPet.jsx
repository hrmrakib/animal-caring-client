import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOISTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddPet = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const userEmail = user?.email;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const {
      name,
      age,
      category,
      location,
      petPhoto,
      longDescription,
      shortDescription,
    } = data;

    // image upload to imgbb and then get an url
    const imageFile = { image: data.petPhoto[0] };

    console.log(imageFile);

    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      const petDetail = {
        name,
        age,
        userEmail,
        category,
        location,
        shortDescription,
        longDescription,
        image: res.data.data.display_url,
      };

      const menuRes = await axiosSecure.post("/pets", petDetail);

      console.log(menuRes.data);

      if (menuRes.data.insertedId) {
        // show success popup
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is added successfully!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
    console.log("with image url", res.data);
  };

  return (
    <div className='max-w-20xl mt-5 mx-auto p-2 md:p-6 bg-white dark:bg-gray-900 border rounded-lg shadow-md'>
      <h2 className='text-2xl text-center font-bold mb-4 dark:text-gray-100 border-b dark:border-gray-600 pb-6'>
        Add a Pet
      </h2>
      <form
        className='w-full grid lg:grid-cols-2 items-center gap-5'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label
            htmlFor='image'
            className='block text-gray-700 dark:text-gray-100'
          >
            Pet Image
          </label>
          <input
            type='file'
            {...register("petPhoto", { required: true })}
            className='mt-2 dark:bg-gray-900'
          />
        </div>
        <div>
          <label
            htmlFor='name'
            className='block text-gray-700 dark:text-gray-100'
          >
            Pet Name
          </label>
          <input
            name='name'
            type='text'
            {...register("name", { required: true })}
            className='mt-2 p-2 w-full border rounded dark:bg-gray-900 dark:text-gray-100'
          />
          {errors.name && (
            <span className='text-red-600 font-medium'>
              Pet name is required
            </span>
          )}
        </div>
        <div>
          <label
            htmlFor='age'
            className='block text-gray-700 dark:text-gray-100'
          >
            Pet Age
          </label>
          <input
            name='age'
            type='number'
            {...register("age", { required: true })}
            className='mt-2 p-2 w-full border rounded dark:bg-gray-900 dark:text-gray-100'
          />
          {errors.age && (
            <span className='text-red-600 font-medium'>
              Pet age is required
            </span>
          )}
        </div>
        <div>
          <label
            htmlFor='category'
            className='block text-gray-700 dark:text-gray-100'
          >
            Pet Category
          </label>
          <select
            {...register("category", { required: true })}
            className='p-2 border border-gray-300 rounded dark:bg-gray-900 dark:text-gray-100'
          >
            <option value=''>All Categories</option>
            <option value='Dog'>Dogs</option>
            <option value='Cat'>Cats</option>
            <option value='Rabbit'>Rabbits</option>
            <option value='Fish'>Fish</option>
          </select>
          <br />
          {errors.category && (
            <span className='text-red-600 font-medium'>
              Pet category is required
            </span>
          )}
        </div>
        <div>
          <label
            htmlFor='location'
            className='block text-gray-700 dark:text-gray-100'
          >
            Pet Location
          </label>
          <input
            name='location'
            type='text'
            {...register("location", { required: true })}
            className='mt-2 p-2 w-full border rounded dark:bg-gray-900 dark:text-gray-100'
          />
          {errors.location && (
            <span className='text-red-600 font-medium'>
              Pet location is required
            </span>
          )}
        </div>
        <div>
          <label
            htmlFor='shortDescription'
            className='block text-gray-700 dark:text-gray-100'
          >
            Short Description
          </label>
          <input
            name='shortDescription'
            type='text'
            {...register("shortDescription", { required: true })}
            className='mt-2 p-2 w-full border rounded dark:bg-gray-900 dark:text-gray-100'
          />
          {errors.shortDescription && (
            <span className='text-red-600 font-medium'>
              Pet short info is required
            </span>
          )}
        </div>
        <div>
          <label
            htmlFor='longDescription'
            className='block text-gray-700 dark:text-gray-100'
          >
            Long Description
          </label>
          <input
            name='longDescription'
            type='textarea'
            {...register("longDescription", { required: true })}
            className='p-2 w-full border border-gray-600 rounded dark:bg-gray-900 dark:text-gray-100'
          />
          {errors.longDescription && (
            <span className='text-red-600 font-medium'>
              Pet description is required
            </span>
          )}
        </div>
        <div className='mt-5'>
          <button
            type='submit'
            className='w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200'
          >
            Add Pet
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPet;
