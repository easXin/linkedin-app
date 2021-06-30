import React from 'react'
import "./Feed.css"
import CreateIcon from "@material-ui/icons/Create"
import ImageIcon from '@material-ui/icons/Image';
import YouTubeIcon from '@material-ui/icons/YouTube';
import DateRangeIcon from '@material-ui/icons/DateRange';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import InputOptions from './InputOptions'

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
        </div>
    )
}

export default Feed
