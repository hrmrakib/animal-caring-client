import { useNavigate } from "react-router-dom";
import useAuth from "./../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import googleImg from "/assets/google.png";
import githubImg from "/assets/github.png";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleGoogleIn = () => {
    googleSignIn().then((result) => {
      const userInfo = {
        name: result.user?.displayName,
        email: result.user?.email,
        image: result.user?.photoURL,
        role: "user",
      };

      console.log(result.user);

      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate("/");
      });
    });
  };

  return (
    <div className='flex items-center justify-center gap-6'>
      <img
        src={googleImg}
        onClick={handleGoogleIn}
        className='size-12 border border-gray-700 p-2 cursor-pointer rounded-full'
      />
      <img
        src={githubImg}
        onClick={handleGoogleIn}
        className='size-12 border border-gray-700 p-2 cursor-pointer rounded-full'
      />
    </div>
  );
};

export default SocialLogin;
