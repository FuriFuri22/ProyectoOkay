const Donacion = require('../models/Donaciones');

const User = require('../models/User');

const ctrlDonacion = {};

ctrlDonacion.postDonacion = async(req,res)=>{

    const idUser = req.user._id;

    const userFind = await User.findById(idUser);

    if(!userFind){
        return res.json({
            msg: "Inicie sesion o registrese"
        })
    }

    const {typeDonacion, description} = req.body;

    const newDonacion = new Donacion({
        typeDonacion,
        description
    });

    try {
        const Donation = await newDonacion.save();

        return res.json({
            msg: "Has hecho una donacion exitosamente",
            Donation
        })

    } catch (err) {
        console.log(err);

        return res.status(500).json({
            msg: 'Error al  llevar acabo esta acción'
        })
    }
}

ctrlDonacion.getDonacion = async (req, res) => {

    const Donaciones =  await Donacion.find({userId: req.user._id, isActive: true});

    return res.json(Donaciones);
}

ctrlDonacion.putDonacion = async(req, res)=>{
    const userId = await req.user._id;

    const donationId = req.params.id;

    const {typeDonacion, description, direction} = req.body;

    const donationFind = await Donacion.findById(donationId);

    if (userId.toString() !== donationFind.userId.toString()) {
        return res.json({
            msg: "Aun no ha hecho una donacion"
        })
    }
    if (!donationFind || donationFind.isActive == false) {
        return res.json({
            msg: 'Donacion inexistente'
        })
    }
    try {
         await Donacion.updateOne({typeDonacion, description, direction});

         return res.json({
            msg: 'Donación modificada exitosamente'
         })
    } catch (error) {
            console.log(error);
            return res.json({
                msg: 'Accion no completada'
            })
    }
}

ctrlDonacion.deleteDonacion = async(req, res)=>{
    const userId = await req.user._id;
    const donationId = req.params.id;
    const donationFind = await Donacion.findById(donationId);

    if (userId.toString() !== donationFind.userId.toString()) {
        return res.json({
            msg: "Aun no ha hecho una donacion"
        })
    }
    if (!donationFind || donationFind.isActive == false) {
        return res.json({
            msg: 'Donacion inexistente'
        })
    }

    try {
        await Donacion.updateOne({_id:donationId}, {isActive:false});

        return res.json({
           msg: 'Donación eliminada exitosamente'
        })
   } catch (error) {
           console.log(error);
           return res.json({
               msg: 'Accion no completada'
           })
   }
    
}


module.exports = ctrlDonacion;