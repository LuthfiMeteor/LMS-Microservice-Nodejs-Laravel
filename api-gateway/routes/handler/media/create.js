const apiAdapter = require('../../apiAdapter');
const { URL_SERVICE_MEDIA } = process.env;

const api = apiAdapter('http://localhost:8080/media');

module.exports = async (req, res) => {
  try {
    const media = await api.post('/',req.body);
    return res.json(media.data);
    // return res.json(api);
  } catch (error) {

    if (error.code === 'ECONNREFUSED') {
      return res.status(500).json({ status: 'error', message: 'service unavailable' });
    }

    // const { status, data } = error.response;
    return res.status(404).json();
  }
}