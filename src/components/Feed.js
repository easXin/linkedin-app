import React, { useState, useEffect } from 'react'
import firebase from "firebase"
import { Avatar } from '@material-ui/core'
import CreateIcon from "@material-ui/icons/Create"
import ImageIcon from '@material-ui/icons/Image';
import YouTubeIcon from '@material-ui/icons/YouTube';
import DateRangeIcon from '@material-ui/icons/DateRange';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import { db } from "../firebase"
import InputOptions from './InputOptions'
import { selectUser } from "../features/userSlice";
import { useSelector } from 'react-redux';
import "./Feed.css"
import Post from './Post.js';
import FlipMove from 'react-flip-move';

const profileUrl = "https://media-exp1.licdn.com/dms/image/C5603AQEWrwE4v4FqOw/profile-displayphoto-shrink_100_100/0/1559254436863?e=1630540800&v=beta&t=84rynyes4FljmWkbnAulGHmlomNZf8tqKc5Lscrnd2E";

function Feed() {
    // comeback here, after finish linkedin api
    const user = useSelector(selectUser);
    const [posts, setPosts] = useState([])
    const [input, setInput] = useState('')

    const sendPost = (e) => {
        e.preventDefault();

        db.collection("posts").add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || "",
            // system time stamo
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
    }
    const handleInputChange = (e) => {
        setInput(e.target.value)
    }

    useEffect(() => {
        // snapshot : connect to real time database of posts collection 
        db.collection("posts").orderBy('timestamp', 'desc').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    // grad data
                    data: doc.data(),
                }
            )))
        ))
    }, [])

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__info">
                    <Avatar src={profileUrl}
                        alt="personal profile image"
                        className="feed__icon" />

                    <div className="feed__input">
                        <CreateIcon />
                        <form>
                            <input type="text"
                                value={input}
                                onChange={handleInputChange}
                                placeholder="Start a post" />
                            <button type="submit" onClick={sendPost}>Send</button>
                        </form>
                    </div>
                </div>

                <div className="feed__inputOptions">
                    {/* input options */}
                    <InputOptions Icon={ImageIcon}
                        title="Photo" color="#70B5F9" />
                    <InputOptions Icon={YouTubeIcon}
                        title="Video" color="#7fc15e" />
                    <InputOptions Icon={DateRangeIcon}
                        title="Event" color="#e7a33e" />
                    <InputOptions Icon={CalendarViewDayIcon}
                        title="Write article" color="#f5987e" />
                </div>
            </div>

            {/* Posts */}
            <div className="feed__posts">
                {/* use uuid for the key  npm i react-flip-move*/}
                <FlipMove>
                    {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
                        <Post
                            key={id}
                            name={name}
                            description={description}
                            message={message}
                            photoUrl={photoUrl}
                        />
                    ))}
                </FlipMove>
            </div>

        </div>
    )
}

export default Feed
