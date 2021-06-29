import React from 'react'
import { Avatar } from '@material-ui/core'
import { Dropdown } from 'react-bootstrap';


import 'bootstrap/dist/css/bootstrap.min.css';
import "./HeaderOption.css"


function HeaderOption({ Icon, title, avatar, dropdown }) {
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
            {dropdown ?
                <div className="headerOption__dropdown">
                    <Dropdown >
                        <Dropdown.Toggle >
                            {title}
                        </Dropdown.Toggle>
                        {/* comeback to here to turn following thing into multilevel dropdown menu */}
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">About Me</Dropdown.Item>
                            <Dropdown.Item href="#/action-1">Account</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Manage</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Sign out</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                :
                (
                    <span className="headerOption__title">{title}</span>
                )
            }
        </div>
    )
}

export default HeaderOption
