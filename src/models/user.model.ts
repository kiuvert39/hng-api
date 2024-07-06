import { DataTypes } from 'sequelize';
import {sequelize }from '../config/database.conf'; // Adjust the import path according to your project structure

const User = sequelize.define('User', {
userId: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4 
},
firstName: {
  
  type: DataTypes.STRING,
  allowNull: false
},
lastName: {
  type: DataTypes.STRING,
  allowNull: false
},
email: {
  type: DataTypes.STRING,
  unique: true,
  allowNull: false,
  validate: {
    isEmail: true
  }
},
password: {
  type: DataTypes.STRING,
  allowNull: false
},
phone: {
  type: DataTypes.STRING
}
}, {
  // Additional model options here
  tableName: 'users',
  timestamps: true // Enable timestamps, adjust according to your needs
});

export default User;