/**
 * Data Model Interfaces
 */

 import { BaseProfile, Profile } from "./profile.interface";
 import * as profileDal from '../db/dal/profile'
 import {ProfileInput, ProfileOuput} from '../db/model/Profile'

/**
 * Service Methods
 */
 export const findAll = async (): Promise<ProfileOuput[]> => {
   return profileDal.getAll();
 }

 export const find = async (id:number): Promise<ProfileOuput> => {
   let profile = profileDal.getById(id);

   return profile;
 };

 export const create = async (payload: BaseProfile): Promise<ProfileOuput> => {
    let profileInput: ProfileInput = {
      name: payload.name,
      surname: payload.surname,
      email: payload.email,
      photo_path: payload.image
    };
    return profileDal.create(profileInput);
  };