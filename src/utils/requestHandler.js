import axios from 'axios';
import { serverUrl } from '../config/config';

export const getHandler = async (path) => {
    const response = await request('get', path);
    return response;
};

const request = async (action, path) => {
    try {
        const response = await axios[action](serverUrl + path);
        return response.data;
    } catch (e) {
        return false;
    }
};
