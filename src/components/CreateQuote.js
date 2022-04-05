import { useMutation } from '@apollo/client'
import React,{useState} from 'react'
import { CREATE_QUOTE } from '../gqloperations/mutations'
import { GET_ALL_QUOTES } from '../gqloperations/queries'

export default function CreateQuote() {
    const [quote,setQuote] = useState("")
    const [createQuote,{data, loading, error}] = useMutation(CREATE_QUOTE,{
        refetchQueries:[
            GET_ALL_QUOTES,
            'getAllQuotes'
        ]
    })
    const handleSubmit = (e)=>{
        e.preventDefault()
        createQuote({
            variables : {
                name : quote
            }
        })
    }

    if(loading)
    {
        return <h5>Loading...</h5>
    }

    if(error)
    {
        console.log(error.message)
    }

    return (
        <div className="container my-container">
                  {error && <div className="red card-panel">{error.message}</div>}
                  {data &&  <div className="green card-panel"> {data.createQuote}      </div>}

            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={quote}
                    onChange={e=>setQuote(e.target.value)}
                    placeholder="write your quote here"
                    />
                 <button className="btn green">create</button>
            </form>
            
        </div>
    )
}
