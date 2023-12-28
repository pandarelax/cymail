import { DataTypes, Model, Sequelize } from 'sequelize';

const sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/sequelize-typescript');

class Targets extends Model {}

Targets.init({
    // attributes
    FullName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Email: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Targets'
    // options
});