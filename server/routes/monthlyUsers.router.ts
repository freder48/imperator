import { Request, Response } from 'express';
import express from 'express';
import rejectUnauthenticated from '../modules/authentication-middleware';

// controllers
import { getUsersOverTime } from '../controllers/userOverTime';

const router: express.Router = express.Router();

router.get('/', rejectUnauthenticated, getUsersOverTime);

export default router;