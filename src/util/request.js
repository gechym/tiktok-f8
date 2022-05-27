import axios from 'axios';

export const handleError = (error) => {
    if (error.response?.data.message) {
        throw new Error(error.response.data.message);
    } else {
        throw new Error(error.message);
    }
};

const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api',
});

export const get = async (path, opt = {}) => {
    const res = await request.get(path, opt);
    return res.data;
};

export default request;
