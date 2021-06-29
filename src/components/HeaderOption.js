import React from 'react'
import { Avatar } from '@material-ui/core'
import "./HeaderOption.css"
import { Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function HeaderOption({ Icon, title, avatar, drop }) {
    const options = [
        'one', 'two', 'three'
    ];
    const defaultOption = options[0];
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
            {drop ?
                <div className="headerOption__dropdown">
                    <Dropdown >
                        <Dropdown.Toggle >
                            {title}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
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
