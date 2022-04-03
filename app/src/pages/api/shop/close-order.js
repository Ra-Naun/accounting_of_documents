import nc from 'next-connect';

import { closeOrder } from '../../../controllers/shop/ordersController';
import onError from '../../../middlewares/errors.js';

const handler = nc({ onError });

handler.post(closeOrder);

export default handler;
