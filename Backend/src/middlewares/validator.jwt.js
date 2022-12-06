const jwt = require('jsonwebtoken');

const User = require('../models/User');

const v_JWT = async(req, res, next)=>{
let token = req.headers.authorization;

if(!token){
    return res.status(401).json({
        msg: 'Token invalido'
    })
}

try {
    const {uid} =  await jwt.verify(token, process.env.SECRET);

    const userFind = await User.findById(uid);
    
    if(!userFind){ return res.status(401).json({
                msg:'Usuario invalido'
    })}
    if(!userFind.isActive){return res.statur(401).json({
        msg: 'Usuario borrado'
    })}
    req.user = userFind
    next();

} catch (error) {
    return res.status(401).json({
        msg:'Token invalid'
    })
}
}

module.exports = v_JWT