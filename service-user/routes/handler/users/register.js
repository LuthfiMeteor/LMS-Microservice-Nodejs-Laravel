const bcrypt = require('bcrypt');
const { User } = require('../../../models');
// const User = require('../../../models/User');
const Validator = require('fastest-validator');
const v = new Validator();
module.exports = async (req, res) => {
    const schema = {
        name:'string|empty:false',
        email:'string|empty:false',
        password:'string|min:6',
        profession:'string|optional',
    }
    const validate = v.validate(req.body, schema);
    if (validate.length) {
        return res.status(400).json({
            status: 'error',
            message: validate,
        })
    }

    const user = await User.findOne({
        where: { email: req.body.email }
    });

    if (user) {
        return res.status(409).json({
            status: 'error',
            message: 'email already exist',
        })
    }
}
