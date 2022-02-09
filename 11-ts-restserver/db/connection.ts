import { Sequelize } from 'sequelize';

const db = new Sequelize('curso_node', 'demos', '123456', {
  host: 'localhost',
  dialect: 'mariadb'
});


export default db;
