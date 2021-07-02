import React from 'react'

import "./InputOptions.css"

function InputOptions({ Icon, title, color }) {
    return (
        <div className="inputOptions">
            <Icon className="inputOptions__icon" style={{ color: color }} />
            <h4>{title}</h4>
        </div>
    )
}

export default InputOptions
