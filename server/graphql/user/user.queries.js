var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLList = require('graphql').GraphQLList;
var userType = require('./user.type').userType;
var UserModel = require('./user.model');

// Query
exports.queryType = new GraphQLObjectType({
  name: 'Query',
  fields: function() {
    return {
      users: {
        type: new GraphQLList(userType),
        resolve: function() {
          const users = UserModel.find().exec();
          if (!users) {
            throw new Error('Error');
          }
          return users;
        }
      }
    };
  }
});
