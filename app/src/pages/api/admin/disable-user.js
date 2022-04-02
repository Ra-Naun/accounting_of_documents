import nc from 'next-connect';

import { disableUser } from '../../../controllers/authControllers';
import onError from '../../../middlewares/errors.js';

const handler = nc({ onError });

handler.post(disableUser);

export default handler;
