import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';

import HeaderOption from './HeaderOption';
import "./Header.css"

function Header() {
    const profileUrl = "https://media-exp1.licdn.com/dms/image/C5603AQEWrwE4v4FqOw/profile-displayphoto-shrink_100_100/0/1559254436863?e=1630540800&v=beta&t=84rynyes4FljmWkbnAulGHmlomNZf8tqKc5Lscrnd2E";
    return (
        <div className="header">

            <div className="header__left">
                {/* image */}
                <img src="https://image.flaticon.com/icons/png/512/174/174857.png"
                    alt="Linkedin Logo" />

                {/* search bar */}
                <div className="header__search">
                    {/* search icon */}
                    <SearchIcon />
                    {/* input filed */}
                    <input type="text" placeholder="Search" />
                </div>
            </div>

            <div className="header__right">
                {/* header options */}
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOption Icon={ChatIcon} title="Messaging" />
                <HeaderOption Icon={NotificationsIcon} title="Notification" />
                <HeaderOption avatar={profileUrl} title="me" />
            </div>
        </div>
    )
}

export default Header
