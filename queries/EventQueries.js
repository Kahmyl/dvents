import { gql } from "@apollo/client";

export const GetEvents = gql`
  query {
    events {
        _id
        title
        description
        price
        date
    }
  }
`

export const GetEventDetails = gql`
  query($id: ID!) {
      event(_id: $id){
          title
          description
          price
          date
          user{
              username
              email
          }
      }
  }
`

export const CreateEvents = gql`
    mutation ($title: String!, $description: String!, $price: Float!, $user: ID!){
      createEvent(title: $title, description: $description, price: $price, user: $user){
        title
        description
      }
    }
`
