import express from 'express';
import { createListing, deleteListing, updateListing, getListing } from '../controllers/listingController.js'
const router = express.Router();
import { verifyToken } from '../Utils/verifyUser.js';

router.post('/create', verifyToken, createListing)
router.delete('/delete/:id', verifyToken, deleteListing)
router.post('/update/:id', verifyToken, updateListing)
router.get('/get/:id', verifyToken, getListing)

export default router;