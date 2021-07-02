import React from 'react'
import { Avatar } from '@material-ui/core'
import { Dropdown } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { selectUser } from "../features/userSlice";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./HeaderOption.css"


function HeaderOption({ Icon, title, avatar, dropdown, onClick }) {
    // pull out user info
    const user = useSelector(selectUser);

    return (
        <div className="headerOption">
            {/* Icon */}
            {/* Add icon if icon is exist */}
            {Icon && <Icon className="headerOption__icon" />}

            {/* avatar */}
            {avatar &&
                <Avatar className="headerOption__icon" src={user?.photoUrl} >
                    {user?.email[0]}
                </Avatar>
            }
            {/* Title */}
            {dropdown ?
                <div className="headerOption__dropdown">
                    <Dropdown >
                        {title &&
                            <Dropdown.Toggle >
                                {user?.displayName}
                            </Dropdown.Toggle>
                        }                        {/* comeback to here to turn following thing into multilevel dropdown menu */}
                        <Dropdown.Menu>
                            <Dropdown.Item href="#">About Me</Dropdown.Item>
                            <Dropdown.Item href="#">Account</Dropdown.Item>
                            <Dropdown.Item href="#">Manage</Dropdown.Item>
                            <Dropdown.Item onClick={onClick}>Sign out</Dropdown.Item>
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
