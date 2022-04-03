import nc from 'next-connect';

import { registerNewUser } from '../../../controllers/authControllers';
import onError from '../../../middlewares/errors.js';

const handler = nc({ onError });

handler.post(registerNewUser);

export default handler;
