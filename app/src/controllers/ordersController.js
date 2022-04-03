import catchAsyncErrors from '../middlewares/catchAsyncErrors';

import db from '../db/models';

const { models: { Order } } = db;

// Done for request on create new user    =>   /api/shop/get-orders
export const getOrders = catchAsyncErrors(async (req, res) => {
  // TODO check Auth
  const orders = await Order.findAll();// TODO where filters

  res.status(200).json({
    success: true,
    orders,
  });
});

// Done for request on create new user    =>   /api/shop/return-order
export const returnOrder = catchAsyncErrors(async (req, res) => {
  // TODO check Auth
  console.log('~| returnOrder!');
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
    message: 'Account activate successfully',
  });
});

// Done for request on create new user    =>   /api/shop/close-order
export const closeOrder = catchAsyncErrors(async (req, res) => {
  // TODO check Auth
  console.log('~| closeOrder!');
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
    message: 'Account activate successfully',
  });
});
