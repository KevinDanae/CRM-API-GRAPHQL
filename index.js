const { ApolloServer } = require("apollo-server");
const { readFileSync } = require("fs");
const resolvers = require("./db/resolvers");
const connectDb = require("./config/db");
// schema
const typeDefs = readFileSync("./db/schema.gql").toString("utf-8");

// connect to db
connectDb();

// servidor
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => {
    return {
      hola: "mundo",
    };
  },
});

// arrancar servidor
server.listen().then(({ url }) => {
  console.log(`Servidor listo en la url ${url}`);
});
