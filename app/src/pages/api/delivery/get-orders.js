import nc from 'next-connect';

import { getCourerOrders } from '../../../controllers/delivery/ordersController';
import onError from '../../../middlewares/errors.js';

const handler = nc({ onError });

handler.get(getCourerOrders);

export default handler;
