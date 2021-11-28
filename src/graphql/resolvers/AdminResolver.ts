import { IResolvers } from 'graphql-tools'
import AdminService from '../../service/AdminService'
import { MutationSignupArgs, MutationUpdateProfileArgs, ProfileResponse, QueryProfileArgs, SignupResponse } from '../generated/graphql'

export const AdminResolvers: IResolvers = {
  Query: {
    async profile(_: void, args: QueryProfileArgs): Promise<ProfileResponse | Error> {
      return await AdminService.getProfile(args)
    }
  },
  Mutation: {
    async signup(_: void, args: MutationSignupArgs): Promise<SignupResponse> {
      return {
        token: 'token'
      }
    },
    async updateProfile(_: void, args: MutationUpdateProfileArgs): Promise<ProfileResponse | null> {
      return await AdminService.createProfile(args)
    }
  }
}
