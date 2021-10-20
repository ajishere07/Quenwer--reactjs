import React from 'react'
import './Option.css'

function Option({name,src}) {
    return (
        <div className="optionContainer">
            <img src={src} alt="img"/>
            <p>{name}</p>
        </div>
    )
}

export default Option