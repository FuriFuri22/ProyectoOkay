const User = require('../models/User');
const bcrypt = require('bcrypt');
const generatorJWT = require('../helpers/generator.jwt');

const ctrlUser = {};

ctrlUser.postUser = async(req, res)=>{
    const {username,password: receivedPassword, dni, email, direccion} = req.body;

    const newPassword = bcrypt.hashSync(receivedPassword, 10);

    const newUser = new User({
        username, 
        password: newPassword,
        dni, 
        email,
        direccion
    });

    try {
        const userSave = await newUser.save();

        const token = await generatorJWT(userSave._id)
        return res.json({
            msg: 'Bienvenido a Accion Donar' ,
            token
        })
    } catch (err) {
        return res.json({
           msg: 'Lo sentimos, no se pudo registrar'
        })
    }
}

ctrlUser.getUser = async(req, res) =>{
    const uid = req.user._id;

    const userFind = await User.findById(uid);

    return res.json({
        msg: 'Esta su informacion de usuario',
        userFind
    })
   
}

ctrlUser.putUser = async(req, res)=>{
    const uid  = req.user._id;

    const userFind = await User.findById(uid);

    const {password:receivedPassword, username, email, direccion} = req.body;

    const newPassword = bcrypt.hashSync(receivedPassword, 10);

    try {
        await User.updateOne({_id: userFind},{
            username,
            password: newPassword,
            email,
            direccion
        });
        return res.json({
            msg: 'Datos actualizados correctamente'
        });
    } catch (error) {
        return res.json({
            msg: 'No pudimos actualizar sus datos'
        })
    }
}

ctrlUser.deleteUser = async(req, res)=>{
    const uid = req.user._id;

    try{
        await User.updateOne({_id: uid}, {isActive: false});

        return res.json({
            msg: 'Esperamos que regreses'
        })
    }catch(err){
        return req.json({
            msg: 'Lo sentimos, hubo un error'
        })
    }
}

module.exports = ctrlUser;