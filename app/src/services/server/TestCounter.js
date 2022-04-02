import db from '../../db/models';

const { models: { Counter } } = db;

export const getCounter = async (format = 'all') => {
  const counterData = await Counter.findOne({
    where: { format },
  });

  if (!counterData) {
    throw new Error('No counter data found');
  }

  return counterData;
};

export const setCounter = async (counter, format = 'all') => {
  await Counter.increment(
      {
        counter: +1,
      },
      {
        where: { format },
      },
  );
};
