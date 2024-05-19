import express from 'express';
import { createListing } from '../controllers/listingController.js'
const router = express.Router();
import { verifyToken } from '../Utils/verifyUser.js';

router.post('/create', verifyToken, createListing)

export default router;