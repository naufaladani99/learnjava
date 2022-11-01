const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("postgres::memory:");

const User = sequelize.define(
  "users",
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    // Other model options go here
  }
);
