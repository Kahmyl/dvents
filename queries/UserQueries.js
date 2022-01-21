export const GetUsers = `
  query{
    users {
      username
      email
      password
    }
  }
`;

export const findUser =`
  query{
    user {
      username
      email
      _id
    }
  }
`;

export const createUserMutation =`
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

export const loginUserMutation =`
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

export const logoutUserMutation =`
  mutation($username: String!) {
    logoutUser(username: $username){
      username
    }
  }
`

