import nc from 'next-connect';

import { getOrders }from '../../../controllers/ordersController';
import onError from '../../../middlewares/errors.js';

const handler = nc({ onError });

handler.get(getOrders);

export default handler;