import db from '../db/models';
import catchAsyncErrors from '../middlewares/catchAsyncErrors';

const { models: { Order } } = db;

const getOrders = catchAsyncErrors(async (req, res) => {  
    const orders = await Order.findAll({order: [
      ['id'],]});
  
    res.status(200).json({
      success: true,
      orders,
    });
  });

const updateOrder = catchAsyncErrors(async (req, res) => {  

  await Order.update({status: 'progress', where: {id: req.body.id}})

  res.status(200).json({
    success: true,
    orders,
  });
});

export { getOrders, updateOrder }