import { IResolvers } from 'graphql-tools'
import { MutationProfileArgs, MutationSignupArgs, ProfileResponse, SignupResponse } from '../generated/graphql'

export const UserResolvers: IResolvers = {
  // Query: {
  //   async login(_: void, args: QueryLoginArgs): Promise<AuthenticateResponse> {
  //     return {
  //       token: "toto"
  //     }
  //   }
  // },
  Mutation: {
    async signup(_: void, args: MutationSignupArgs): Promise<SignupResponse> {
      return {
        token: 'token'
      }
    },
    async profile(_: void, args: MutationProfileArgs): Promise<ProfileResponse> {
      console.log({_,args})
      return {
        city: args.city,
        contactNumber: args.contactNumber,
        country: args.country,
        email: args.email,
        firstName: args.firstName,
        lastname: args.lastname,
        pincode: args.pincode
      }
    }
  }
}
