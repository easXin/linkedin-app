import React from 'react'
import "./NewsArticle.css"
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function NewsArticle({ news }) {
    return (
        <div className="newsArticle">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>

            <div className="widgets__articleRight">
                <h4>{news.title}</h4>
                <p>{news.author}</p>
            </div>
        </div>
    )
}

export default NewsArticle


