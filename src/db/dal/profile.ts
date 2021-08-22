import Profile from '../model/Profile'
import {ProfileInput, ProfileOuput} from '../model/Profile'

export const create = async (payload: ProfileInput): Promise<ProfileOuput> => {
    const profile = await Profile.create(payload)
    return profile
}

export const getById = async (id: number): Promise<ProfileOuput> => {
    const profile = await Profile.findByPk(id)
    if (!profile) {
        // @todo throw custom error
        throw new Error('not found')
    }
    return profile
}

export const getAll = async (): Promise<ProfileOuput[]> => {
    return Profile.findAll({});
}