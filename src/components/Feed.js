import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Avatar } from '@material-ui/core'
import ImageIcon from '@material-ui/icons/Image';
import YouTubeIcon from '@material-ui/icons/YouTube';
import DateRangeIcon from '@material-ui/icons/DateRange';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Dropdown } from 'react-bootstrap';
import firebase from "firebase"
import { db } from "../firebase"
import InputOptions from './InputOptions'
import { selectUser } from "../features/userSlice";
import Post from "./Post";
import FlipMove from 'react-flip-move';

import "./Feed.css"

function Feed() {
    // comeback here, after finish linkedin api
    const user = useSelector(selectUser);
    const [posts, setPosts] = useState([])
    const [input, setInput] = useState('')
    const [sortOption, setSortOption] = useState('')
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
                    <Avatar src={user?.photoUrl}
                        alt="personal profile image"
                        className="feed__icon" >
                        {/* if for some resone, user's profile is down, then set the first letter of email as personal avatar*/}
                        {user?.email[0]}
                    </Avatar>
                    <div className="feed__input">
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
            <div className="feed__separationLine">
                <hr className="feed__horizontal" />
                <span className="feed__sorts">
                    <span className="feed__sort">
                        Sort by:
                    </span>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic" className="feed__dropDown">
                            Recent
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={e => setSortOption("top")}>Top</Dropdown.Item>
                            <Dropdown.Item onClick={e => setSortOption("recent")}>Recent</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                </span>
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
