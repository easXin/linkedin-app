import React from 'react'
import { Avatar } from '@material-ui/core'
import "./Sidebar.css"
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice.js';

const imageUrl = "data:image/jpeg;base64,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"
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
                    alt="profile image"
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
