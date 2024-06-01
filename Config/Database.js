import { Sequelize } from "sequelize";

const db = new Sequelize("toyoya", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;