import { DataTypes } from 'sequelize';
import db from '../db/connection'

const User = db.define('user', {
  username: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  state: {
    type: DataTypes.BOOLEAN
  },
});


export default User;
