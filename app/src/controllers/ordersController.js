import { Sequelize } from 'sequelize';
import catchAsyncErrors from '../middlewares/catchAsyncErrors';
import db from '../db/models';

const { models: { Order, Storage } } = db;

// Done for request on create new user    =>   /api/shop/get-orders
export const getOrders = catchAsyncErrors(async (req, res) => {
  // TODO check Auth
  const { searchQuery = '', limit = 200, page = 1 } = req.query;

  let sequelizeQuery = {};

  if (searchQuery) {
    sequelizeQuery = {
      ...sequelizeQuery,
      where: {
        [Sequelize.Op.or]: [
          { name: { [Sequelize.Op.iLike]: `%${searchQuery}%` } },
          { '$Storage.name$': { [Sequelize.Op.iLike]: `%${searchQuery}%` } },
        ],
      },
      include: [{
        model: Storage,
        attributes: ['id', 'name'],
      }],
    };
  }

  const offset = Math.max((page - 1) * limit, 0);
  const totalCount = await Order.count(sequelizeQuery);
  sequelizeQuery = { ...sequelizeQuery, offset, limit };
  const orders = await Order.findAll(sequelizeQuery);

  res.status(200).json({
    success: true,
    orders,
    totalCount,
  });
});

// Done for request on create new user    =>   /api/shop/return-order
export const returnOrder = catchAsyncErrors(async (req, res) => {
  // TODO check Auth
  await Order.update(
    {
      status: 'Возвращается',
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

// Done for request on create new user    =>   /api/shop/close-order
export const closeOrder = catchAsyncErrors(async (req, res) => {
  // TODO check Auth
  await Order.update(
    {
      status: 'Получен',
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
