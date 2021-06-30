import React, { useState} from 'react'
import CreateIcon from "@material-ui/icons/Create"
import ImageIcon from '@material-ui/icons/Image';
import YouTubeIcon from '@material-ui/icons/YouTube';
import DateRangeIcon from '@material-ui/icons/DateRange';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import InputOptions from './InputOptions'

import "./Feed.css"
import Post from './Post.js';

const profileUrl = "https://media-exp1.licdn.com/dms/image/C5603AQEWrwE4v4FqOw/profile-displayphoto-shrink_100_100/0/1559254436863?e=1630540800&v=beta&t=84rynyes4FljmWkbnAulGHmlomNZf8tqKc5Lscrnd2E";

function Feed() {
  
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input type="text" />
                        <button type="submit">Send</button>
                    </form>
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
                <Post name="Eric Wang"
                    description="software engineer"
                    message="yolo!!"
                    photoUrl={profileUrl}
                />
            </div>

        </div>
    )
}

export default Feed
