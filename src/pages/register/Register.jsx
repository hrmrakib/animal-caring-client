import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { updateProfile } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../../components/socialLogin/SocialSignIn";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOISTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Register = () => {
  const [viewPassword, setViewPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { createUser, setUser } = useAuth();

  const onSubmit = async (data) => {
    const { name, email, password, photo } = data;

    if (!/[A-Z]/.test(password)) {
      setPasswordError("");
      setPasswordError("Password must have at least one uppercase letter");
      return;
    } else if (!/[a-z]/.test(password)) {
      setPasswordError("");
      setPasswordError("Password must have at least one lowercase letter");
      return;
    } else if (password.length < 6) {
      setPasswordError("");
      setPasswordError("Password length must be at least 6 characters");
      return;
    } else {
      setPasswordError("");

      const imageFile = { image: data.photo[0] };

      console.log(imageFile);

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
    }
  };

  return (
    <div className='shadow-sm h-screen mt-20'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='max-w-sm mx-auto border p-4 mt-4 rounded-md'
      >
        <h2 className='text-2xl text-center text-black dark:text-white font-semibold'>
          Create a new account!
        </h2>
        <div className='mb-3'>
          <label
            htmlFor='name'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Your Name
          </label>
          <input
            type='text'
            id='name'
            {...register("name", { required: true })}
            className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
            placeholder='Enter name'
          />
          {errors.name && (
            <span className='text-red-600 font-medium'>
              Your name is required
            </span>
          )}
        </div>
        <div className='mb-3'>
          <label
            htmlFor='email'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Your email
          </label>
          <input
            type='email'
            id='email'
            {...register("email", { required: true })}
            className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
            placeholder='name@example.com'
          />
          {errors.email && (
            <span className='text-red-600 font-medium'>
              Your email is required
            </span>
          )}
        </div>
        <div className='mb-3 relative'>
          <label
            htmlFor='password'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Your password
          </label>
          <input
            type={viewPassword ? "text" : "password"}
            id='password'
            placeholder='Enter password'
            {...register("password", { required: true })}
            className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
          />
          <span
            className='absolute right-2 top-10 *:text-xl cursor-pointer'
            onClick={() => setViewPassword(!viewPassword)}
          >
            {viewPassword ? <FaEye /> : <FaEyeSlash />}
          </span>
          <p className='text-red-600 font-medium'>{passwordError}</p>
          {errors.password && (
            <span className='text-red-600 font-medium'>
              Your password is required
            </span>
          )}
        </div>

        <div className='mb-4'>
          <label
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            htmlFor='file_input'
          >
            Upload Your Photo
          </label>
          <input
            className='block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400'
            id='file_input'
            {...register("photo", { required: true })}
            type='file'
          />
          {errors.photo && (
            <span className='text-red-600 font-medium'>
              Your photo is required
            </span>
          )}
        </div>

        <div className='flex items-start mb-5'>
          <div className='flex items-center h-5'>
            <input
              id='terms'
              type='checkbox'
              {...register("condition")}
              value=''
              required
              className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800'
            />
          </div>
          <label
            htmlFor='terms'
            className='ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'
          >
            I agree with the{" "}
            <a
              href='#'
              className='text-blue-600 hover:underline dark:text-blue-500'
            >
              terms and conditions
            </a>
          </label>
        </div>
        <button
          type='submit'
          className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >
          Register new account
        </button>
        <div className='flex items-start mt-5 dark:text-white'>
          Already have an account!{"  "} Please
          <Link to='/login' className='text-blue-600 underline ml-1'>
            Login
          </Link>
        </div>

        <div className='divider my-5 dark:text-white'>or</div>

        <div>
          <SocialLogin />
        </div>
      </form>
    </div>
  );
};

export default Register;
