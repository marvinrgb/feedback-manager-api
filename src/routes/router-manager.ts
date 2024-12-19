import { Router }from 'express';
const router = Router();

import ticketRoute from './ticket-route.js';

router.use('/tickets', ticketRoute);

export default router;