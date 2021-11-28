import dotenv from 'dotenv'
import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import schema from './graphql/schemasMap'
import { graphqlHTTP } from 'express-graphql'
import path from 'path'
import mongoose from 'mongoose'
import { errorType } from './errorHandling/Constants'

dotenv.config({
  path: path.resolve(__dirname, `../${process.env.NODE_ENV}.env`)
})

process.once('SIGUSR2',
  function () {
    process.kill(process.pid, 'SIGUSR2');
  }
);

const app = express()

// uncomment to use apollo server
const server = new ApolloServer({
  schema,
  formatError: (err) => {
    const error = (errorName: string) => {
      return errorType[errorName]
    }
    let { message, statusCode } = error(err.message)
    return ({ message, statusCode })
  }
})
server.applyMiddleware({ app, path: '/graphql' })

// express graphql server
// app.use('/graphql', graphqlHTTP({
//   schema,
//   graphiql: true
// }));

const PORT = process.env.PORT || 4002

console.log(`ENVIRONMENT = ${process.env.NODE_ENV}`)

mongoose.connect(process.env.DB_HOST as string)
mongoose.connection.once('open', () => {
  console.log('connected to database');
});

app.listen(PORT, () => {
  console.log(`\n🚀🚀🚀        GraphQL is now running on http://localhost:${PORT}/graphql`)
})
