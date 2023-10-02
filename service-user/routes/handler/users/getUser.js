const { User} = require('../../../models');

module.exports = async (req, res)=>{
    const id = req.params.id;
    const user = await User.findByPk(id,{
        Attributes:['id','name','email','role','profession','avatar']
    })

    if (!user) {
        return res.status(404).json({
            status: 'error',
            message: 'user not found',
        })
    }
    return res.json({
        status: 'success',
        data:{
            id:user.id,
            name:user.name,
            email:user.email,
            role:user.role,
            avatar:user.avatar,
            profession:user.profession,
        }
    });
}