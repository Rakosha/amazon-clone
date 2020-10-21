import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import "./login.css"
import {auth} from "../firebase"

const Login = () => {
    const history = useHistory();
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');

    const signIn = e => {
        e.preventDefault(); //no reload!!!

        auth.signInWithEmailAndPassword(email,password)
        .then(auth => {
            history.push('/');
        })
        .catch(error => alert(error.message));
    }

    const register = e =>{
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            console.log(auth);
            if(auth){
                history.push('/');
            }
        })
        .catch(error => alert(error.message));

    }

    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/800px-Amazon_logo.svg.png" alt="" />
            </Link>
            <div className="login__container">
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input onChange={e => setEmail(e.target.value)} value={email} type="text" />
                    <h5>Password</h5>
                    <input onChange={e => setPassword(e.target.value)} value={password} type="password" />
                    <button type="submit" onClick={signIn} className="login__signInButton">Sign In</button>
                </form>

                <p>IMPORTANT!!! Please DO NOT use your actual email and password that you use to login to other (legitimate) websites! Thank you.</p>
                <button onClick={register} className="login__registerButton">Create your Amazon account</button>
            </div>
        </div>
    )
}

export default Login