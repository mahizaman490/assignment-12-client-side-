import axios from "axios";

const axiosSecure = axios.create({

    baseURL: 'https://bd-parcel-management-server.vercel.app'
})
const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;