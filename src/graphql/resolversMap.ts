import { IResolvers } from 'graphql-tools'
import { merge } from 'lodash'
import { AdminResolvers } from './resolvers/AdminResolver'


const resolverMap: IResolvers = merge(AdminResolvers)
export default resolverMap
