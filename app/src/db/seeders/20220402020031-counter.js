import { models } from '../models';

const { Counter } = models;

export default {
  up: async () => Counter.bulkCreate(
      [
        { name: 'n1', count: 0, format: 'all' },
        { name: 'n2', count: 1, format: 's1' },
        { name: 'n3', count: 2, format: 's2' },
      ],
      {
        fields: ['id', 'name', 'format', 'count'],
        updateOnDuplicate: ['id', 'name', 'format'],
      },
    ),

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('counter', {}),
};
