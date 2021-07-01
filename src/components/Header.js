import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom";
import { auth } from "../firebase"
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice.js';
import HeaderOption from './HeaderOption';
import "./Header.css"
import { logout } from '../features/userSlice.js';

// only use these variable one time 
const profileUrl = "https://media-exp1.licdn.com/dms/image/C5603AQEWrwE4v4FqOw/profile-displayphoto-shrink_100_100/0/1559254436863?e=1630540800&v=beta&t=84rynyes4FljmWkbnAulGHmlomNZf8tqKc5Lscrnd2E";

const linkedinLogoUrl = "https://image.flaticon.com/icons/png/512/174/174857.png"


function Header() {
    const dispatch = useDispatch()
    const history = useHistory()
    const user = useSelector(selectUser);

    const logoutOfApp = (e) => {
        e.preventDefault();
        dispatch(logout());
        auth.signOut();
        history.push("/login")
    }

    return (
        <div className="header">
            <div className="header__left">
                {/* image */}
                <img src={linkedinLogoUrl}
                    alt="LinkedIn Logo" />

                {/* search bar */}
                <div className="header__search">
                    {/* search icon */}
                    <SearchIcon />
                    {/* input filed */}
                    <input type="text" placeholder="Search for jobs, people, posts..." />
                </div>
            </div>

            <div className="header__right">
                {/* header options */}
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOption Icon={ChatIcon} title="Messaging" />
                <HeaderOption Icon={NotificationsIcon} title="Notification" />
                {/* take out avatar because img might not be available at beginning  avatar={user.photoUrl} */}
                <HeaderOption avatar={true} title="Me" dropdown={true}
                    onClick={logoutOfApp} />
            </div>
        </div>
    )
}

export default Header
