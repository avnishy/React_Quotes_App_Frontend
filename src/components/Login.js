import { useMutation } from '@apollo/client';
import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom';
import { LOGIN_USER } from '../gqloperations/mutations';

export default function Login() {
    const navigate = useNavigate()
    const [formData,setFormData] = useState({})
    const [signinUser, {loading, error}] = useMutation (LOGIN_USER,{
        onCompleted(data) {
            localStorage.setItem("token" , data.user.token)
            navigate('/')
        }
    }) 
    const handleChange = (e)=>{
        setFormData({
         ...formData,
         [e.target.name]:e.target.value
        })
    
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        signinUser({
            variables:{
                UserSignin : formData
            }
        })
    }
    if (loading) return ( <h4>Loading</h4> )
    return (
        <div className="container my-container">
        {error && <div className="red card-panel">{error.message}</div>}
          <h5>Login!!</h5>
            <form onSubmit={handleSubmit}>
                <input
                 type="email"
                 placeholder="email"
                 name="email"
                 autoComplete="off"
                 onChange={handleChange}
                 required
                 />
                <input
                 type="password"
                 placeholder="password"
                 name="password"
                 autoComplete="off"
                 onChange={handleChange}
                 required
                 />
                  <Link to="/signup"><p>Dont have an account ?</p></Link> 
                 <button className="btn #673ab7 deep-purple" type="submit">Login</button>
            </form>
        </div>
    )
}
