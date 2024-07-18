import express from 'express';
import {user , register, login} from '../Controllers/userController.js';
const router = express.Router();

//get users
router.get('/users', user);

//register
router.post('/register', register);

//login user
router.post('/login',login);


export default router;