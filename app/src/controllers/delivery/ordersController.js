import { Sequelize } from 'sequelize';
import catchAsyncErrors from '../../middlewares/catchAsyncErrors';
import db from '../../db/models';

const { models: { CourerOrder } } = db;

// Done for request on create new user    =>   /api/shop/get-orders
export const getCourerOrders = catchAsyncErrors(async (req, res) => {
  // TODO check Auth
  const { searchQuery = '', limit = 200, page = 1 } = req.query;

  let sequelizeQuery = {};

  sequelizeQuery = {
    ...sequelizeQuery,
    where: {
        name: { [Sequelize.Op.iLike]: `%${searchQuery}%` } ,
    },
  };

  const offset = Math.max((page - 1) * limit, 0);
  const totalCount = await CourerOrder.count(sequelizeQuery);
  sequelizeQuery = { ...sequelizeQuery, offset, limit };
  const courerOrders = await CourerOrder.findAll(sequelizeQuery);

  res.status(200).json({
    success: true,
    courerOrders,
    totalCount,
  });
});

// Done for request on create new user    =>   /api/shop/return-order
export const takeCourerOrder = catchAsyncErrors(async (req, res) => {
  // TODO check Auth
  await CourerOrder.update(
    {
      status: 'В процессе',
    },
    {
      where: { id: req.body.itemId },
    },
  );

  res.status(200).json({
    success: true,
    message: 'Successfully',
  });
});