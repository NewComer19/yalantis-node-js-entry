import { DataTypes, Model, Optional } from 'sequelize'
import {sequelize}  from '../configs/db.config'

interface ProfileAttributes {
    id: number;
    name: string;
    surname: string;
    email?: string;
    photo_path?: string;
  };

  export interface ProfileInput extends Optional<ProfileAttributes, 'id'> {};
  export interface ProfileOuput extends Required<ProfileAttributes> {};

  class Profile extends Model<ProfileAttributes, ProfileInput> implements ProfileAttributes {
    public id!: number;
    public name!: string;
    public surname!: string;
    public email!: string;
    public photo_path!: string;
  
  }
  
  Profile.init({
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING
    },
    photo_path: {
      type: DataTypes.STRING
    }
  }, {
    timestamps: false,
    sequelize: sequelize,
    paranoid: true,
    tableName: "profiles"
  });
  
  export default Profile;