// we use express to create routes
import express from 'express';
import { test } from '../controllers/user.controller';
import { deleteUser, test, updateUser,  getUserListings, getUser} from '../controllers/user.controller.js';

const router = express.Router();

router.get('/test', test)
router.post('/update/:id', verifyToken, updateUser)
router.post('/delete/:id', verifyToken, deleteUser)
router.get('/listings/:id', verifyToken, getUserListings)

export default router;