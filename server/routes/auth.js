const router = require('express').Router();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt-nodejs'); //faire hashage de mot de passe

mongoose.connect('mongodb://localhost:27017/NewDB', {
    useNewUrlParser: true,
    useCreateIndex: true,
});

const userSchema = require('../models/user')
const userModel = mongoose.model('users', userSchema); // import model

//Register user
router.post('/register', async (req, res) => {
    console.log(req.body)
    req.body.password = await bcrypt.hashSync(req.body.password);

    const result = await userModel.create(req.body).then().catch(err => {
        res.send(err);
        return;
    });
    res.send(result);
});

// login with jsonwebtoken (jwt)
router.post('/login', async (req, res) => {
    resultLogin = await userModel.findOne({ email: req.body.email });
    if (!resultLogin) { res.send({ message: 'user not found' }) }
    if (!bcrypt.compareSync(req.body.password, resultLogin.password)) { res.send({ message: 'bad password' }) }
    // resultLogin.password = '';// pour masquer password
    const token = jwt.sign({ data: resultLogin }, 'secret_code');
    res.send({ message: 'ok', usertoken: token });
});

// just for testing
router.get('/register', async (req, res) => {
    const result = await userModel.find();
    res.send(result);
});

module.exports = router;
