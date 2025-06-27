import axiosClient from '@/apis/axiosClient';
// const { default: axiosClient } = require('src/apis/axiosClient');
// const { loadConfigFromFile } = require('vite');

const getProduct = async () => {
    const res = await axiosClient.get('/product');

    return res.data;
};

export default getProduct;
