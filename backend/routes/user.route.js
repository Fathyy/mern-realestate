// we use express to create routes
import express from 'express';
import { test } from '../controllers/user.controller';

const router = express.Router();

router.get('/test', test)
router.post('/update/:id', verifyToken, updateUser)
router.post('/delete/:id', verifyToken, updateUser)

export default router;