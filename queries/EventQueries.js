export const GetEvents =`
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

export const GetEventDetails = `
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

export const CreateEvents =`
    mutation ($title: String!, $description: String!, $price: String!, $image: String!, $date: String!, $user: ID!){
      createEvent(title: $title, description: $description, price: $price, image: $image, date: $date, user: $user){
        title
        description
      }
    }
`

export const CreateBooking = `
    mutation ($user: ID!, $event: ID!){
      BookEvents(user: $user, event: $event){
        _id
      }
    }
`

export const Booking =`
  query ($event: ID!){
    booking(event: $event){
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
export const GetTicket = `
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

  
