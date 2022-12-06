const router = require('express').Router();

const {
    getUser,
    postUser,
    putUser,
    deleteUser } = require('../controllers/User.controllers');

    const v_JWT = require('../middlewares/validator.jwt')

    router.get('/User',[v_JWT], getUser);

    router.post('/User', postUser);

    router.put('/User', [v_JWT], putUser);

    router.delete('/User', [v_JWT], deleteUser);

    module.exports = router;