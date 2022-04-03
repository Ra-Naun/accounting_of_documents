import nc from 'next-connect';

import { returnOrder } from '../../../controllers/ordersController';
import onError from '../../../middlewares/errors.js';

const handler = nc({ onError });

handler.post(returnOrder);

export default handler;
