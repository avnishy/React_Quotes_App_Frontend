import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_USER_BY_ID } from '../gqloperations/queries'
import { useParams } from 'react-router-dom'

export default function OtherUserProfile() {
    const {userid} = useParams()
        const {loading, error, data}= useQuery(GET_USER_BY_ID,{
        variables : {userid}
    })

    if (loading) {return <h4>Profile is Loading....</h4>}

    if(error)
    {console.error(error)}

    return (
        <>
        <div className="container my-container">
            <div className="center-align">
                <img className="circle" style={{border:"2px solid",marginTop:"10px"}} src={`https://robohash.org/${data.user.firstName}.png?size=200x200`} alt="pic" />
                <h5>{data.user.firstName} {data.user.lastName}</h5>
                <h6>{data.user.email}</h6>
                <h3>Your quotes</h3>
            </div>
            </div>
            <div className="container">
             {
                 data.user.quotes.map(quote => {
                     return (
                        <blockquote>
                        <h6>{quote.name}</h6>
                        <hr/>
                    </blockquote>
                     )
                 })
                }
                </div>
        </>
    )
}
