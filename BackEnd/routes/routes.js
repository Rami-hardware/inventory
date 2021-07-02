import express from 'express'
import { getRecords } from '../models/recordModels.js'
// init express router
const router = express.Router();
 
// Get All Product
router.get('/', getRecords);
export default router