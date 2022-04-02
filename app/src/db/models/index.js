import { Sequelize } from 'sequelize';
import config from '../config.mjs';

import counter from './counter.mjs';

const db = { models: {} };

const sequelize = config.use_env_variable
  ? new Sequelize(process.env[config.use_env_variable], config)
  : new Sequelize(config.database, config.username, config.password, config);

const models = [
  counter,
];

// eslint-disable-next-line no-restricted-syntax
for (const modelInit of models) {
  const model = modelInit(sequelize, Sequelize);
  db.models[model.name] = model;
}

Object.values(db.models)
  .filter(model => typeof model.associate === 'function')
  .forEach(model => model.associate(db.models));
db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
