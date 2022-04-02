import { sequelize } from './models';

export * from './models';
export const testConnection = () => sequelize.authenticate();
