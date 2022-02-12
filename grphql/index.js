const graphql = require("graphql");
const {GraphQLSchema,GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList} = graphql;

const userMockData = require("../mock-data.json");
const UserType = require('./typedefs/UserType')

const ROOTQUERY = new GraphQLObjectType({
    name: "RootQueryType",
    fields:{
        fetchAllUsers:{
            type: new GraphQLList(UserType),
            args: {id: {type: GraphQLInt}},
            resolve(parent, args){
                return userMockData;
            }
        }
    }
});

const MUTATION = new GraphQLObjectType({
    name: "Mutation",
    fields:{
       createUser: {
           type: UserType,
           args: {
            first_name: {type:GraphQLString},  
            last_name: {type:GraphQLString},  
            email: {type:GraphQLString},  
            gender: {type:GraphQLString},  
            ip_address: {type:GraphQLString}               
           },
           resolve(parent, args) {
            let userData ={
                id: userMockData.length+1,
                first_name: args.first_name,  
                last_name: args.last_name,  
                email: args.email,  
                gender: args.gender,  
                ip_address: args.ip_address 
            }   
            userMockData.push(userData);
            return args;
           }
       }
    }
});

module.exports = new GraphQLSchema({query: ROOTQUERY, mutation:MUTATION})