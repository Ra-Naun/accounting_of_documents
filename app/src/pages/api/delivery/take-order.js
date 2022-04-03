import nc from 'next-connect';

import { takeCourerOrder } from '../../../controllers/delivery/ordersController';
import onError from '../../../middlewares/errors.js';

const handler = nc({ onError });

handler.post(takeCourerOrder);

export default handler;
