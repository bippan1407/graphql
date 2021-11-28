import dotenv from 'dotenv'
import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import schema from './graphql/schemasMap'
import { graphqlHTTP } from 'express-graphql'
import path from 'path'
import mongoose from 'mongoose'

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
// const server = new ApolloServer({
//   schema,
// })
// server.applyMiddleware({ app, path: '/graphql' })

// express graphql server
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));
const PORT = process.env.PORT || 4002

console.log(`ENVIRONMENT = ${process.env.NODE_ENV}`)

mongoose.connect('mongodb://127.0.0.1:27017/easymanage')
mongoose.connection.once('open', () => {
  console.log('connected to database');
});

app.listen(PORT, () => {
  console.log(`\n🚀      GraphQL is now running on http://localhost:${PORT}/graphql`)
})
