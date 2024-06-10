import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOISTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdatePet = () => {
  const {
    _id,
    name,
    age,
    adopted,
    category,
    date,
    image,
    location,
    shortDescription,
    longDescription,
  } = useLoaderData();

  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const { name, age, category, location, shortDescription, longDescription } =
      data;

    console.log(data?.petPhoto?.length);

    if (data?.petPhoto?.length > 0) {
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
          category,
          location,
          shortDescription,
          longDescription,
          image: res.data.data.display_url,
        };

        const petUpdate = await axiosSecure.put(`/pets/${_id}`, petDetail);

        if (petUpdate.data.modifiedCount > 0) {
          // show success popup
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${data.name} updated successfully!`,
            showConfirmButton: false,
            timer: 1999,
          });
          navigate("/dashboard/myAddedPets");
        }
      }
    } else {
      const petDetail = {
        name,
        age,
        image,
        category,
        location,
        shortDescription,
        longDescription,
      };

      const petUpdate = await axiosSecure.put(`/pets/${_id}`, petDetail);

      if (petUpdate.data.modifiedCount > 0) {
        // show success popup
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} updated successfully!`,
          showConfirmButton: false,
          timer: 1999,
        });
        navigate("/dashboard/myAddedPets");
      }
    }
  };

  return (
    <div className='max-w-20xl mt-5 mx-auto p-2 md:p-6 bg-white rounded-lg shadow-md'>
      <h2 className='text-2xl text-center font-bold mb-4'>Update your a Pet</h2>
      <div className='divider'></div>
      <form
        className='w-full grid lg:grid-cols-2 items-center gap-5'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label htmlFor='image' className='block text-gray-700'>
            Pet Image
          </label>
          <input
            type='file'
            // defaultValue={image}
            {...register("petPhoto")}
            className='mt-2'
          />
        </div>
        <div>
          <label htmlFor='name' className='block text-gray-700'>
            Pet Name
          </label>
          <input
            name='name'
            type='text'
            defaultValue={name}
            {...register("name", { required: true })}
            className='mt-2 p-2 w-full border rounded'
          />
          {errors.name && (
            <span className='text-red-600 font-medium'>
              Pet name is required
            </span>
          )}
        </div>
        <div>
          <label htmlFor='age' className='block text-gray-700'>
            Pet Age
          </label>
          <input
            name='age'
            type='number'
            defaultValue={age}
            {...register("age", { required: true })}
            className='mt-2 p-2 w-full border rounded'
          />
          {errors.age && (
            <span className='text-red-600 font-medium'>
              Pet age is required
            </span>
          )}
        </div>
        <div>
          <label htmlFor='category' className='block text-gray-700'>
            Pet Category
          </label>
          <select
            defaultValue={category}
            {...register("category", { required: true })}
            className='p-2 border border-gray-300 rounded'
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
          <label htmlFor='location' className='block text-gray-700'>
            Pet Location
          </label>
          <input
            name='location'
            type='text'
            defaultValue={location}
            {...register("location", { required: true })}
            className='mt-2 p-2 w-full border rounded'
          />
          {errors.location && (
            <span className='text-red-600 font-medium'>
              Pet location is required
            </span>
          )}
        </div>
        <div>
          <label htmlFor='shortDescription' className='block text-gray-700'>
            Short Description
          </label>
          <input
            name='shortDescription'
            type='text'
            defaultValue={shortDescription}
            {...register("shortDescription", { required: true })}
            className='mt-2 p-2 w-full border rounded'
          />
          {errors.shortDescription && (
            <span className='text-red-600 font-medium'>
              Pet short info is required
            </span>
          )}
        </div>
        <div>
          <label htmlFor='longDescription' className='block text-gray-700'>
            Long Description
          </label>
          <input
            name='longDescription'
            type='textarea'
            defaultValue={longDescription}
            {...register("longDescription", { required: true })}
            className='p-2 w-full border border-gray-600 rounded'
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
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdatePet;
