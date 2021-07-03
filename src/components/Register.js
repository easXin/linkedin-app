import React, { useState } from 'react'

import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { auth } from "../firebase";
import { Form, Button } from "react-bootstrap"
import { login } from '../features/userSlice'
import "./Register.css"

// const profileUrl = "https://media-exp1.licdn.com/dms/image/C5603AQEWrwE4v4FqOw/profile-displayphoto-shrink_100_100/0/1559254436863?e=1630540800&v=beta&t=84rynyes4FljmWkbnAulGHmlomNZf8tqKc5Lscrnd2E";

function Register() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [profilePic, setProfilePic] = useState("")

    const history = useHistory();
    // data layer out
    const dispatch = useDispatch()

    const register = async (e) => {
        e.preventDefault()
        await auth.createUserWithEmailAndPassword(email, password)
            .then(userAuth => {
                //go inside  user in firebase if auth is valid 
                console.log("xxxx ->", userAuth.user)
                userAuth.user.updateProfile({
                    // firebase name : local name
                    displayName: name,
                    photoURL: profilePic,
                })
                    .then(() => {
                        // push user into redux store
                        dispatch(login({
                            email: userAuth.user.email,
                            uid: userAuth.user.uid,
                            displayName: name,
                            photoUrl: profilePic
                        }))

                    })
            })
            .catch(error =>
                alert(error.message));
        // console.log(">>>", user)
        history.push("/")

    };
    return (
        <div className="register">
            <img
                src="https://www.adweek.com/wp-content/uploads/2019/06/linkedin-branding-CONTENT-2019.jpg.webp"
                alt="LinkedIn logo"
            />
            <h1>Make the most of your professional life</h1>
            <Form className="register__form">
                <Form.Group className="mb-3" >
                    <Form.Label htmlFor="inlineFormInput" className="register__label">Name</Form.Label>
                    <Form.Control
                        className="mb-2 register__input"
                        id="inlineFormInput"
                        placeholder="Enter your name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="register__label">Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" className="register__input"
                        value={email}
                        onChange={e => setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="register__label">Password (6 or more characters)</Form.Label>
                    <Form.Control type="password" placeholder="Password" className="register__input"
                        value={password}
                        onChange={e => setPassword(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label htmlFor="inlineFormInput" className="register__label">Upload profile Url</Form.Label>
                    <Form.Control
                        className="mb-2 register__input"
                        id="inlineFormInput"
                        placeholder="Upload your profile URL"
                        value={profilePic}
                        onChange={e => setProfilePic(e.target.value)}
                    />
                </Form.Group>



                {/* <Form.Group className="mb-3" >
                    <Form.Label htmlFor="inlineFormInput" className="register__label" className="register__aggrement">
                        By clicking Agree & Join, you agree to the LinkedIn User Agreement, Privacy Policy, and Cookie Policy.
                    </Form.Label>
                </Form.Group> */}
                <Button variant="primary" type="submit" className="register__button" onClick={register}>
                    Agree & Join
                </Button>
            </Form>

            {/* {property}{sides}-{size} */}
        </div>
    )
}

export default Register
