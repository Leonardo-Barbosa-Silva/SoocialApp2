import express from 'express';
import multerUpload from '../../configs/multer.js';
import usersControllers from '../../controllers/users/index.js'


const router = express.Router();
const {
    register,
    login,
    user
} = usersControllers


router.post('/auth/register', multerUpload.single("picture"), register)
router.post('/auth/login', login)
router.post('/me', user)



export default router;