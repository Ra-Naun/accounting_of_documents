import nc from 'next-connect';

import getNewUsers from '../../../controllers/getNewUsersController';
import onError from '../../../middlewares/errors.js';

const handler = nc({ onError });

handler.get(getNewUsers);

export default handler;
