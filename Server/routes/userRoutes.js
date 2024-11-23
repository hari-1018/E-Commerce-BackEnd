const express = require('express');
const userRouter = express.Router();

const {Register, Login} = require('../controllers/userControllers');

userRouter.post('/register', Register);
userRouter.post('/login', Login);



module.exports = userRouter;