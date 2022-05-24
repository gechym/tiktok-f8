import axios from 'axios';

const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api',
});

export const get = async (path, opt = {}) => {
    const res = await request.get(path, opt);

    return res.data;
};

export default request;
