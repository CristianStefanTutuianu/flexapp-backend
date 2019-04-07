const graphql = require('graphql');
const {GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLInt, GraphQLSchema} = graphql;

//TODO: Future improvements: coordinates for citites instead of names

const UserType = new GraphQLObjectType(
    {
        name: 'User',
        fields: () => ({
            id: {type: GraphQLString},
            city: {type: GraphQLString},
            name: {type: GraphQLString},
            phone: {type: GraphQLInt}
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
            }
            
        }
    })
})

module.exports = new GraphQLSchema({
    query: RootQuery
})

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

