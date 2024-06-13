import axios from "axios";

export const axiosPublic = axios.create({
  // baseURL: "http://localhost:8000",
  baseURL: "https://animal-caring.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
