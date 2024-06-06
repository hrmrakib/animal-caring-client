import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import SocialLogin from "../../components/socialLogin/SocialSignIn";

const Login = () => {
  const [viewPassword, setViewPassword] = useState(false);
  const [error, setError] = useState("");
  const { signIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    setError("");
    const { email, password } = data;

    console.log("helllo login");
    signIn(email, password)
      .then((userCredential) => {
        setError("");
        navigate(from);
      })
      .catch((err) => {
        setError(err.message);
        console.log(err.message);
      });
  };

  return (
    <div className='mt-24'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='max-w-sm mx-auto border rounded shadow-sm p-4'
      >
        <div className='mb-4'>
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
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='name@example.com'
            required
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
          <p className='text-red-600 font-medium'>{error}</p>
          {errors.name && (
            <span className='text-red-600 font-medium'>
              Your password is required
            </span>
          )}
        </div>
        <div className='flex items-start mb-5'>
          New Here? Please{"  "}
          <Link to='/register' className='text-blue-600 underline ml-1'>
            Register
          </Link>
        </div>
        <button
          type='submit'
          className='w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >
          Login
        </button>
        <div className='divider my-5'>or</div>

        <div>
          <SocialLogin />
        </div>
      </form>
    </div>
  );
};

export default Login;
