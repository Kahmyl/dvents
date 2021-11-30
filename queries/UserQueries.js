import { gql } from "@apollo/client";

export const GetUsers = gql`
  query Users {
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
        username
        email
      }
    }
`;

export const Login = gql`
    query($identity: String!, $password: String!) {
      login(identity: $identity, password: $password){
        username
        token
      }
    }
`
