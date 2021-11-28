import { IResolvers } from 'graphql-tools'
import AdminService from '../../service/AdminService'
import { MutationSignupArgs, MutationUpdateProfileArgs, ProfileResponse, QueryProfileArgs, SignupResponse } from '../generated/graphql'

export const UserResolvers: IResolvers = {
  Query: {
    async profile(_: void, args: QueryProfileArgs): Promise<ProfileResponse | null> {
      let response = await AdminService.getProfile(args)
      if (!response) {
        return null
      }
      let newObj: ProfileResponse = Object.assign({}, response?.toObject());
      return newObj
    }
  },
  Mutation: {
    async signup(_: void, args: MutationSignupArgs): Promise<SignupResponse> {
      return {
        token: 'token'
      }
    },
    async updateProfile(_: void, args: MutationUpdateProfileArgs): Promise<ProfileResponse> {
      let response = await AdminService.createProfile(args)
      let newObj: ProfileResponse = Object.assign({}, response.toObject());
      return newObj
    }
  }
}
