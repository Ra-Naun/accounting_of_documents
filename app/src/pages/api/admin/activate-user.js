import nc from 'next-connect';

import { activateUser } from '../../../controllers/authControllers';
import onError from '../../../middlewares/errors.js';

const handler = nc({ onError });

handler.post(activateUser);

export default handler;
