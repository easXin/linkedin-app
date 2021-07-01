import React from 'react'
import { Avatar } from '@material-ui/core'
import "./Sidebar.css"
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice.js';
const profileUrl = "https://media-exp1.licdn.com/dms/image/C5603AQEWrwE4v4FqOw/profile-displayphoto-shrink_100_100/0/1559254436863?e=1630540800&v=beta&t=84rynyes4FljmWkbnAulGHmlomNZf8tqKc5Lscrnd2E";
const imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJEd9rv0fQOE8CIdS9S6jMnM_0ZRmw1Myxjw&usqp=CAU"
function Sidebar() {

    const user = useSelector(selectUser);
    // reuseable item  : jsx
    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )
    return (
        <div className="sidebar">
            {/* sidebar top */}
            <div className="sidebar__top">
                <img src={imageUrl} alt="avatar background" />
                <Avatar src={user?.photoUrl}
                    alt="personal profile image"
                    className="sidebar__icon" >
                    {/* if for some resone, user's profile is down, then set the first letter of email as personal avatar*/}
                    {user?.email[0]}
                </Avatar>
                <h2>{user?.displayName}</h2>
                <h4>{user?.email}</h4>
            </div>
            {/* stats */}
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">2,500</p>
                </div>
                <div className="sidebar__stat">
                    <p>Connection</p>
                    <p className="sidebar__statNumber">1,410</p>
                </div>
            </div>

            {/* sidebar bottom */}
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem("React js")}
                {recentItem("Programming")}
                {recentItem("Design")}
                {recentItem("Developer")}
            </div>
        </div>
    )
}

export default Sidebar
