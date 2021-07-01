import React from 'react';
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {
    // functional jsx
    
    const newsArticle = (heading, subtitle) => (
        <div className="widget__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>

            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    );

    return (
        <div className="widgets">
            <div className="widget__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>

            {newsArticle("Coronavirus: Lagos updates", "Tops news - 324 readers")}
            {newsArticle("Bitcoin hits new high", "Tops news - 2,324 readers")}
        </div>
    )
}

export default Widgets