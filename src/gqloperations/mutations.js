import { gql } from "@apollo/client";
export const SIGNUP_USER = gql`
  mutation createUser($userNew: UserInput!) {
   user: signupUser (userNew: $userNew) {
      firstName
    }
  }
`
export const LOGIN_USER = gql`
mutation Signin ($UserSignin : UserSigninInput!){
  user: signinUser(UserSignin:$UserSignin){
    token
  }
}
`

export const CREATE_QUOTE = gql`
mutation createNewQuotes ($name:String!) {
  createQuote(name:$name)
}
`