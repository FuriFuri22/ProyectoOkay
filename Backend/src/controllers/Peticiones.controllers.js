const Peticion = require('../models/Peticiones');

const User = require('../models/User');

const ctrlPeticion = {};

ctrlPeticion.postPeticion = async(req,res)=>{

    const idUser = req.user._id;

    const userFind = await User.findById(idUser);

    if(!userFind){
        return res.json({
            msg: "Inicie sesion o registrese"
        })
    }

    const {tittlePeticion, descriptionPeticion, urgencyLevel} = req.body;

    const newPeticion = new Peticion({
        tittlePeticion, descriptionPeticion, urgencyLevel
    });

    try {
        const Petition = await newPeticion.save();

        return res.json({
            msg: "Has hecho una petición exitosamente",
            Petition
        })

    } catch (err) {
        console.log(err);

        return res.status(500).json({
            msg: 'Error al  llevar acabo esta acción'
        })
    }
}

ctrlPeticion.getPeticion = async (req, res) => {

    const Peticiones =  await Peticion.find({userId: req.user._id, isActive: true});

    return res.json(Peticiones);
}

ctrlPeticion.putPeticion = async(req, res)=>{
    const userId = await req.user._id;

    const PetitionId = req.params.id;

    const {tittlePeticion, descriptionPeticion, urgencyLevel} = req.body;

    const PetitionFind = await Peticion.findById(PetitionId);

    if (userId.toString() !== PetitionFind.userId.toString()) {
        return res.json({
            msg: "Aun no ha hecho una petición"
        })
    }
    if (!PetitionFind || PetitionFind.isActive == false) {
        return res.json({
            msg: 'Petición inexistente'
        })
    }
    try {
         await Peticion.updateOne({tittlePeticion, descriptionPeticion, urgencyLevel});

         return res.json({
            msg: 'Petición modificada exitosamente'
         })
    } catch (error) {
            console.log(error);
            return res.json({
                msg: 'Accion no completada'
            })
    }
}

ctrlPeticion.deletePeticion = async(req, res)=>{
    const userId = await req.user._id;
    const PetitionId = req.params.id;
    const PetitionFind = await Peticion.findById(PetitionId);

    if (userId.toString() !== PetitionFind.userId.toString()) {
        return res.json({
            msg: "Aun no ha hecho una petición"
        })
    }
    if (!PetitionFind || PetitionFind.isActive == false) {
        return res.json({
            msg: 'Petición inexistente'
        })
    }

    try {
        await Peticion.updateOne({_id:PetitionId}, {isActive:false});

        return res.json({
           msg: 'Petición eliminada exitosamente'
        })
   } catch (error) {
           console.log(error);
           return res.json({
               msg: 'Accion no completada'
           })
   }
    
}


module.exports = ctrlPeticion;