const { RefreshToken } = require('../../../models');
const Validator = require('fastest-validator');
const v = new Validator();

module.exports = async(req, res) => {
    const refresh_token = req.query.refresh_token;
    const token = await RefreshToken.findOne({
        where: { token: refresh_token }
    })
    if (!token) {
        res.status(400).json({
            status:'error',
            message:'invalid token',
        })
    }
    return res.json({
        status:'success',
        token,
    })
}