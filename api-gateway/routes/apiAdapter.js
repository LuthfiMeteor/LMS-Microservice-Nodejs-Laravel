const axios = require('axios');

const { timeout } = process.env;

module.exports = (baseUrl) => {
    return axios.create({
        baseUrl: baseUrl,
        timeout: timeout,
    })
}