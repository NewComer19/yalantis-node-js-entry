/**
 * Data Model Interfaces
 */

 import { BaseProfile, Profile } from "./profile.interface";
 import { Profiles } from "./profiles.interface";
/**
 * In-Memory Store
 */
 let profiles: Profiles = {
    1: {
      id: 1,
      name: "Andy",
      surname: "Chetum",
      email: "ac@yahoo.com",
      image: "path/to/image"
    },
    2: {
      id: 2,
      name: "Mike",
      surname: "Donowan",
      email: "md@gamil.com",
      image: "path/to/image"
    },
    3: {
      id: 3,
      name: "Tee",
      surname: "Ho",
      email: "th@gmail.com",
      image: "path/to/image"
    }
  };

/**
 * Service Methods
 */
 export const findAll = async (): Promise<Profile[]> => Object.values(profiles);

 export const find = async (id: number): Promise<Profile> => profiles[id];

 export const create = async (newProfile: BaseProfile): Promise<Profile> => {
    const id = new Date().valueOf();
  
    profiles[id] = {
      id,
      ...newProfile,
    };
  
    return profiles[id];
  };