# graphql-node-express

## Testing queries

### for fetch all users

{
fetchAllUsers {
first_name
email
ip_address
}
}

### for createUser mutation

mutation{
createUser(first_name:"Nag", last_name:"Cse", email:"mymail@gmail.com",ip_address:"1.1.1.1"){
id
first_name
last_name
email
ip_address
}
}
