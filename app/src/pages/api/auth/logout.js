import nc from 'next-connect';

import { logoutUser } from '../../../controllers/authControllers';
import onError from '../../../middlewares/errors.js';

const handler = nc({ onError });

handler.get(logoutUser);

export default handler;