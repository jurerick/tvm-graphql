import express from "express";
import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { resolvers, typeDefs } from "./graphql";
import TvmCalculator from "tvm-calculator";

const app = express();
const port = 9000;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({ tvm: TvmCalculator }),
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
});

server.start().then(() => {
  server.applyMiddleware({ app, path: "/api" });

  app.listen(port);

  console.log(`[app] : http://localhost:${port}`);
});
