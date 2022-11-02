import express from 'express';
import { getProfile, updateProfile } from '../controllers/profile.js';
import auth from '../middlewares/auth.js';

const router = express.Router();

router.get('/:_id', getProfile);
router.put('/:_id', updateProfile);

export default router;
