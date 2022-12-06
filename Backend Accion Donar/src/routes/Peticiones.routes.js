const router = require('express').Router();

const {
    getPeticion,
    postPeticion,
    putPeticion,
    deletePeticion} = require('../controllers/Peticiones.controllers')


    const v_JWT = require('../middlewares/validator.jwt');

router.get('/Peticion',[v_JWT],getPeticion);

router.post('/Peticion',[v_JWT],postPeticion);

router.put('/Peticion/:id',[v_JWT], putPeticion);

router.delete('/Peticion/:id', [v_JWT], deletePeticion);

module.exports = router