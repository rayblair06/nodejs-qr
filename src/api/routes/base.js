import express from 'express';

import { baseController } from '../controllers';


const router = express.Router();

router.get('/', baseController.index);

export default router;
