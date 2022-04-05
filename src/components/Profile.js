import { useQuery } from '@apollo/client'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { GET_MY_PROFILE } from '../gqloperations/queries'

export default function Profile() {
    const {loading, error, data}= useQuery(GET_MY_PROFILE)
    const navigate = useNavigate()
    if(!localStorage.getItem("token")){
        navigate("/login")
        return <h2>Unauthorized</h2>
    }
    if(loading) return <h2>Profile is loading</h2>
    if(error){
        console.log(error)
    }
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
                        <p className="right-align"><hr/></p>
                    </blockquote>
                     )
                 })
                }
            </div>
        
        </>
    )
}
