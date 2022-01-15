import { gql } from "@apollo/client";

export const GetEvents = gql`
  query {
    events {
        _id
        title
        description
        price
        image
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
          image
          date
          user{
              _id
              username
              email
          }
      }
  }
`

export const CreateEvents = gql`
    mutation ($title: String!, $description: String!, $price: String!, $image: String!, $date: String!, $user: ID!){
      createEvent(title: $title, description: $description, price: $price, image: $image, date: $date, user: $user){
        title
        description
      }
    }
`

export const CreateBooking = gql`
    mutation ($user: ID!, $event: ID!){
      BookEvents(user: $user, event: $event){
        _id
      }
    }
`

export const Booking = gql`
  query ($user: ID!, $event: ID!){
    booking(user: $user, event: $event){
      user{
        username
      }
      event{
        title
        image
      }
    }
  }
`
export const GetTicket = gql`
query($user: ID!){
  ticket(user: $user){
    _id
    user{
      username
      email
    }
    event{
      title
      date
      image
    }
  }
}
`

  
