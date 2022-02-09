import { Sequelize } from 'sequelize';

const db = new Sequelize('db_name', 'db_user', 'db_pass', {
  host: 'localhost',
  dialect: 'db_manager'
});


export default db;
