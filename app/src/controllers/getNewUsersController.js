import catchAsyncErrors from '../middlewares/catchAsyncErrors';
import { preparePassword, ID_MATCHER } from '../utils/cryptoUtils';

import db from '../db/models';

const { models: { User } } = db;

// Done for request on create new user    =>   /api/admin/activate-user/:id
export default catchAsyncErrors(async (req, res) => {
  // TODO check Auth

  // const newUsers = await User.findAll({
  //   where: { isActive: true },
  // });

  const newUsers = await User.findAll({ where: { isActive: false } });

  res.status(200).json({
    success: true,
    newUsers,
  });
});
