import nc from 'next-connect';

import { updateOrder }from '../../../controllers/ordersController';
import onError from '../../../middlewares/errors.js';

const handler = nc({ onError });

handler.post(updateOrder);

export default handler;