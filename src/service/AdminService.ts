import { AdminModel } from "../entities/Admin";
import { errorName, errorType } from "../errorHandling/Constants";
import { MutationUpdateProfileArgs, ProfileResponse, QueryProfileArgs } from "../graphql/generated/graphql";

class AdminService {
    async getProfile(args: QueryProfileArgs): Promise<ProfileResponse | Error> {
        let profile = await AdminModel.findById(args.id)
        if (!profile) {
            return new Error(errorName.NOT_FOUND)
        }
        let profileDto: ProfileResponse = Object.assign({}, profile?.toObject());
        return profileDto
    }

    async createProfile(args: MutationUpdateProfileArgs): Promise<ProfileResponse | null> {
        let profile = await AdminModel.create({ ...args })
        let profileDto: ProfileResponse = Object.assign({}, profile.toObject());
        return profileDto
    }
}

export default new AdminService