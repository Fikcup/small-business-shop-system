import express from 'express';
import { userController } from '../../controllers/user-controller';

const router = express.Router();

router.route('/signup').post(userController.createUser);

router.route('/signin').post(userController.loginUser);

export default router;