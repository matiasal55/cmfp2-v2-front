const dotenv = require('dotenv');

const envFound = dotenv.config();

if (!envFound) throw new Error('Env not found');

module.exports = {
    serverUrl: process.env.REACT_APP_SERVER_URL,
};
