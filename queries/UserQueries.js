import { gql } from "@apollo/client";

export const GetUsers = gql`
  query{
    users {
      username
      email
      password
    }
  }
`;

export const createUserMutation = gql`
    mutation ($username: String!, $email: String!, $password: String!) {
      createUser(username: $username, email: $email, password: $password){
        _id
        username
        email
        token
        tokenExpiration
      }
    }
`;

export const LoginUserMutation = gql`
    mutation($identity: String!, $password: String!) {
      loginUser(identity: $identity, password: $password){
        userId
        username
        email
        token
        tokenExpiration
      }
    }
`

