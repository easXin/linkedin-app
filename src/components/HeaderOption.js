import { Avatar } from '@material-ui/core'
import React from 'react'
import "./HeaderOption.css"
function HeaderOption({ Icon, title, avatar }) {
    return (
        <div className="headerOption">
            {/* Icon */}
            {/* Add icon if icon is exist */}
            {Icon && <Icon className="headerOption__icon" />}

            {/* avatar */}
            {avatar &&
                <Avatar className="headerOption__icon" src={avatar} />
            }
            {/* Title */}
            <h3 className="headerOption__title">{title}</h3>


        </div>
    )
}

export default HeaderOption
