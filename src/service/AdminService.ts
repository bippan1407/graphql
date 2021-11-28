import { AdminModel } from "../entities/Admin";
import { MutationUpdateProfileArgs, QueryProfileArgs } from "../graphql/generated/graphql";

class AdminService {
    async getProfile(args: QueryProfileArgs) {
        return await AdminModel.findById(args.id)
    }
    async createProfile(args: MutationUpdateProfileArgs) {
        return await AdminModel.create({ ...args })
    }
}

export default new AdminService