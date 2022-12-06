const {model, Schema } = require('mongoose');
require('./User')

const PeticionSchema = Schema({
    tittlePeticion: {
        type: String,
        required: true
    },
    descriptionPeticion: {
        type: String,
        required: true
    },
    urgencyLevel:{
        type: Number,
        require: false
    }, 
    userId:{
        type: Schema.ObjectId,
        ref: 'User'
    },
    isActive: {
        type: Boolean,
        default: true
    }

})

module.exports = model('Peticion', PeticionSchema);