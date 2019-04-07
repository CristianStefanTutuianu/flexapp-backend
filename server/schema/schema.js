const graphql = require('graphql');
const {GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema} = graphql;
const _ = require('lodash');

//TODO: Future improvements: coordinates for citites instead of names

/**
 * Dummy data
 * 
 * TO-DO: replace with Mongo
 */
var users = [
    {name: 'Ralut', city: 'Bucharest', phone: 0700000000, id: '1'},
    {name: 'Stefan', city: 'Bucharest', phone: 0700000001, id: '2'},
    {name: 'Nox', city: 'Cluj', phone: 0700000002, id: '3'}
]
const UserType = new GraphQLObjectType(
    {
        name: 'User',
        fields: () => ({
            id: {type: GraphQLString},
            city: {type: GraphQLString},
            name: {type: GraphQLString},
            phone: {type: GraphQLInt} // TODO add relation to city & membership
        })
    }
);

const MembershipType = new GraphQLObjectType({
    name: 'Membership',
    fields: () => ({
        id: {type: GraphQLString},
        lengthInDays: {type: GraphQLString},
        recurring: {type: GraphQLBoolean},
        price: {type: GraphQLInt}
    })
})


const GymType = new GraphQLObjectType(
    {
        name: 'Gym',
        fields: () => ({
            id: {type: GraphQLString},
            city: {type: GraphQLString},
            name: {type: GraphQLString},
            phone: {type: GraphQLInt},
            sessionPrice: {type: GraphQLInt}
        })
    }
);

const CityType = new GraphQLObjectType(
    {
        name: 'City',
        fields: () => ({
            id: {type: GraphQLString},
            latitude: {type: GraphQLInt},
            longitude: {type: GraphQLInt},
            name: {type: GraphQLString} // TODO: add relations to gyms
        })
    }
);

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({
        user: {
            type: UserType,
            args: {
                id: {type: GraphQLString}
            },
            resolve(parent, args){
                // code to get data from DB / other source
                // access to args so that we can query the DB
                return _.find(users, {id: args.id});
            }

        }
    })
})

module.exports = new GraphQLSchema({
    query: RootQuery
});

