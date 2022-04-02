import nc from 'next-connect';

import { deleteUser } from '../../../controllers/authControllers';
import onError from '../../../middlewares/errors.js';

const handler = nc({ onError });

handler.post(deleteUser);

export default handler;
