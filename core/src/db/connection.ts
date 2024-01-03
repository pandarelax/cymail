import { Sequelize } from "sequelize-typescript";
import path from "path";

const __dirname = path.resolve();
const sequelize = new Sequelize({
  database: process.env.DB_NAME,
  dialect: "postgres",
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT as string),
  models: [__dirname + "/models"],
});

export default sequelize;