import express from 'express';
import { createListing, deleteListing } from '../controllers/listingController.js'
const router = express.Router();
import { verifyToken } from '../Utils/verifyUser.js';

router.post('/create', verifyToken, createListing)
router.delete('/delete/:id', verifyToken, deleteListing)

export default router;