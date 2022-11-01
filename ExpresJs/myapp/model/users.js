const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("postgres::memory:");

const User = sequelize.define(
  "User",
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    phone_number: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    user_type: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  }
  // {
  //   // Other model options go here
  // }
);
