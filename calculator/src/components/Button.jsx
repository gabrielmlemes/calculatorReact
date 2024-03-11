import './Button.css'
import React from 'react'

export default props =>
    <button 

    onClick={e =>  props.click && props.click(props.label)}
    
    className={ // Classes que serão aplicadas: 
    `
    button
    ${props.operation ? 'operation' : ''}
    ${props.double ? 'double' : ''}
    ${props.triple ? 'triple' : ''}
    `}>
        
    {props.label}

    </button>
