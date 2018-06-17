require('dotenv').config();

const { ApolloServer } = require('apollo-server');

const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const build_config = require('./config');

// MODELS
const demo_model = require('./models/demo');

// Global config options for the application
const config = build_config();

// Set up Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    // simple auth check on every request
    const auth = (req.headers && req.headers.authorization) || '';

    // Initialize data models and pass dependencies
    const models = {
      demo: demo_model({ config })
    };

    return {
      models,
      auth
    };
  },
  engine: true,
  tracing: true
});

// Start our server with our port config
server
  .listen({ port: config.port })
  .then(({ url }) => console.log(`🚀 app running at ${url}`));
