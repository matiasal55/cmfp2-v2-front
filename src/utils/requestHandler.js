import axios from 'axios';
import { serverUrl } from '../config/config';

export const getHandler = async (path) => {
    const response = await request('get', path);
    return response.data;
};

const request = async (action, path) => {
    const response = await axios[action](serverUrl + path);
    return response;
};
