const router = require('express').Router();

const {
    getDonacion,
    postDonacion,
    putDonacion,
    deleteDonacion} = require('../controllers/Donaciones.controllers')


    const v_JWT = require('../middlewares/validator.jwt');

router.get('/Donacion',[v_JWT],getDonacion);

router.post('/Donacion',[v_JWT],postDonacion);

router.put('/Donacion/:id',[v_JWT], putDonacion);

router.delete('/Donacion/:id', [v_JWT], deleteDonacion);

module.exports = router