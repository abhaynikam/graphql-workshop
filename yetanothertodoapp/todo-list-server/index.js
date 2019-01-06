import path from 'path';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { mergeTypes, fileLoader, mergeResolvers } from 'merge-graphql-schemas';

const PORT = 8080;
const app = express();

const typeDefs = mergeTypes(fileLoader(path.join(__dirname, './graphql/schema')));
const resolvers = mergeResolvers(fileLoader(path.join(__dirname, './graphql/resolvers')));

const apollo = new ApolloServer({ typeDefs, resolvers });

apollo.applyMiddleware({ app });

app.listen(PORT);
