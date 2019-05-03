const { ApolloServer } = require('apollo-server')

const server = new ApolloServer({
  modules: [require('./modules/register')]
})

server.listen().then(({ url }) => console.log(url))
