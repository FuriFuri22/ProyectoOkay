const User = require("../models/User");

const generatorJWT = require("../helpers/generator.jwt");

const bcrypt = require('bcrypt');

const ctrlAuth = {};

ctrlAuth.login = async(req, res)=>{
    const {username, password} = req.body;

    try{
        const userFind = await User.findOne({username});

        if(!userFind) { 
            return res.status(400).json({
            ok: false,
            msg: 'Usuario no registrado'
          });}

          if(!userFind.isActive){
            return res.status(400).json({
                ok: false,
                msg: 'Usuario no registrado'
            });
          }
       const verifyPass = bcrypt.compareSync(password, userFind.password);

       if(!verifyPass){
        return res.status(400).json({
            ok: false,
            msg: 'Las contraseñas no coinciden'
        });
       }

       const token = await generatorJWT( userFind._id)

       return res.json({ token ,username: userFind.username});
    }catch(err){
        return res.json({ msg: 'Fallo el inicio de sesion' });
    }
}

module.exports = ctrlAuth