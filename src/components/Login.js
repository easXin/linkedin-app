import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";
import "./Login.css"

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorEmail, setErrorEmail] = useState("")
    const [errorPassword, setErrorPassword] = useState("")

    const history = useHistory();
    const loginToApp = (e) => {
        e.preventDefault();
        if (!email) {
            setErrorEmail("Please enter a valid username")
        }
        if (!password) {
            setErrorPassword("Please enter a password.")
        }
        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push("/");
            })
            .catch((error) => {
                alert(error.message);
            });
        return true;
    };

    const removeErrEmail = () => {
        if (email)
            setErrorEmail("")
    }
    const removeErrPassword = () => {
        if (password)
            setErrorPassword("")
    }
    return (
        <div className="login">
            <img
                src="https://www.adweek.com/wp-content/uploads/2019/06/linkedin-branding-CONTENT-2019.jpg.webp"
                alt="LinkedIn logo"
            />
            {/* https://stackoverflow.com/questions/38301774/how-to-do-floating-of-labels-in-css */}
            <form className="login__form">
                <h1>Sign in</h1>
                <p>Stay updated on your professional world</p>
                <input type="text" placeholder="Email or Phone"
                    value={email} onChange={e => setEmail(e.target.value)} onBlur={removeErrEmail} />
                {errorEmail && <p className="login__err">{errorEmail}</p>}

                <input type="password" placeholder="Password"
                    value={password} onChange={e => setPassword(e.target.value)} onBlur={removeErrPassword} />

                {errorPassword && <p className="login__err">{errorPassword}</p>}

                <div className="login__passwordReset">
                    <span>Forgot password?</span>
                </div >
                <button onClick={loginToApp}>Sign in</button>
            </form>

            <p>
                New to LinkedIn?
                <span className="login__register">
                    <Link to="/register">Join now</Link>
                </span>
            </p>
        </div>
    )
}

//  setErrorEmail("Please enter a valid username")
export default Login
