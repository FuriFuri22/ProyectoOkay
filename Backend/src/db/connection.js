const mongoose = require('mongoose');

const dbConnect = async()=>{
    try {
        mongoose.connect('mongodb+srv://recirop:Reci-Rop@reci-rop.yx4viki.mongodb.net/?retryWrites=true&w=majority');
        console.log("Base de Datos enlazada")
    } catch (error) {
        console.log(error);
        console.log('No se logro la coneccion')
    }
}

module.exports = dbConnect;

