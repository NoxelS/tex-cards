import { Router } from 'express';

import AuthRouter from './auth';
import InfoRouter from './info';


// Init router and path
const router = Router();

// Add sub-routes
router.use('/auth', AuthRouter);
router.use('/info', InfoRouter);

// Export the base-router
export default router;
