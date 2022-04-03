import db from '../db/models';
import catchAsyncErrors from '../middlewares/catchAsyncErrors';

const { models: { Order } } = db;

const getOrders = catchAsyncErrors(async (req, res) => {  
    const orders = await Order.findAll();
  
    res.status(200).json({
      success: true,
      orders,
    });
  });

export { getOrders }