import { Sequelize, DataTypes, Model } from 'sequelize';
import * as dotenv from "dotenv";

dotenv.config();

export const sequelize = new Sequelize(`${process.env.CONNECTION_STRING}`);

export async function tryConn() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

