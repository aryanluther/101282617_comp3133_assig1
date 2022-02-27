const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { ApolloServer } = require("apollo-server-express");
const TypeDefs = require("./schema");
const Resolvers = require("./resolver");
const dotenv = require("dotenv");
dotenv.config();

const url = process.env.MONGODB_URL;

const connect = mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

connect.then(
  (db) => {
    console.log("Connected correctly to server!");
  },
  (err) => {
    console.log(err);
  }
);

const server = new ApolloServer({
  typeDefs: TypeDefs.typeDefs,
  resolvers: Resolvers.resolvers,
});

const app = express();
app.use(bodyParser.json());
server.start().then((res) => {
  server.applyMiddleware({ app });
  app.listen({ port: process.env.PORT }, () => {
    console.log(
      `Server at http://localhost:${process.env.PORT}${server.graphqlPath}`
    );
  });
});
