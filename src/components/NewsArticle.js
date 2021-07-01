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
                <h4>{news.heading}</h4>
                <p>{news.subtitle}</p>
            </div>
        </div>
    )
}

export default NewsArticle


