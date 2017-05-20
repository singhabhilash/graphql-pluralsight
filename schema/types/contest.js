const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID
} = require('graphql');

const ContestStatusType = require('./contest-status');

module.exports = new GraphQLObjectType({
  name: 'ContestStatusType',

  fields: {
    id: { type: GraphQLID },
    code: { type: new GraphQLNonNull(GraphQLString) },
    title: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: GraphQLString },
    status: { type: new GraphQLNonNull(ContestStatusType) },
    createAt: { type: new GraphQLNonNull(GraphQLString) }
  }
});
