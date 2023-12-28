import { DataTypes, Model, Sequelize } from "sequelize";

const sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/sequelize-typescript');

class Campaigns extends Model {}

Campaigns.init({
    // attributes
    Name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Description: {
        type: DataTypes.STRING
        // allowNull defaults to true
    }
}, {
    sequelize,
    modelName: 'Campaigns'
    // options
});