const {model, Schema} = require('mongoose');

const UserSchema = Schema({
    username: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    dni:{
        type: Number,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    isActive:{
        type: Boolean,
        default: true
    },
    direccion: {
        type: String
    },
    coordenadas:{
        type: Array
    }


},{
    timestamps: true,
    vresionkey: false
})

module.exports = model('User', UserSchema)