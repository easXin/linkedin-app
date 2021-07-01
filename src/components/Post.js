import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import { Avatar } from '@material-ui/core'
import React,{forwardRef} from 'react'
import InputOptions from './InputOptions'
import "./Post.css"

const Post = forwardRef (({ name, description, message, photoUrl },ref) => {
    return(
        // animate needs a ref in react
        <div ref={ref} className="post">
            <div className="post__header">
                <Avatar src={photoUrl} alt="user image">{name[0]}</Avatar>
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>

            </div>
            <div className="post__body">
                <p>{message}</p>
            </div>
            <div className="post__buttons">
                <InputOptions Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray" className="post__button" />
                <InputOptions Icon={ChatOutlinedIcon} title="Comment" color="gray" className="post__button" />
                <InputOptions Icon={ShareOutlinedIcon} title="Share" color="gray" className="post__button" />
                <InputOptions Icon={SendOutlinedIcon} title="Send" color="gray" className="post__button" />
            </div>
        </div>

    )
})

export default Post
