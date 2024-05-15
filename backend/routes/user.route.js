// we use express to create routes
import express from 'express';
import { test } from '../controllers/user.controller';

const router = express.router();

router.get('/test', test)

export default router;