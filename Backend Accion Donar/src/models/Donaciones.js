const {model, Schema } = require('mongoose');
require('./User')
const DonacionSchema = Schema({
    typeDonacion : {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },

    userId:{
        type: Schema.ObjectId,
        ref: 'User'
    },
    isActive:{
        type:Boolean,
        default: true
    }
},
{
    timestamps: true,
    versionkey: false
})

module.exports = model('Donacion', DonacionSchema)