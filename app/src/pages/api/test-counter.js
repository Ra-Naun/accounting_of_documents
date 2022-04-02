import { getCounter, setCounter } from '../../controllers/testCounterController';

export default async function handler(req, res) {
  switch (req.method) {
    case 'POST': {
      try {
        await setCounter(req?.body?.format);
        res.status(200).json({ status: 'success' });
      } catch (error) {
        res
          .status(500)
          .json({ status: 'error', msg: error.message });
      }
      break;
    }
    case 'GET': {
      try {
        const response = await getCounter(req?.query?.format);
        const count = parseInt(response.dataValues.count, 10);
        res.status(200).json({ count });
      } catch (error) {
        res
          .status(500)
          .json({ status: 'error', msg: error.message });
      }
      break;
    }
    default: {
      res
       .status(500)
       .json({ status: 'error', msg: 'Route not found' });
       break;
    }
  }
}
