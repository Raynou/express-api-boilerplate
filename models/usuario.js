const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../connection.js");

class Usuario extends Model {}

Usuario.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize, timestamps: false, tableName: "usuario" }
);

module.exports = {
  Usuario,
};
