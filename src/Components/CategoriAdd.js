import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const CategoriAdd = ({setCategories}) => {
    const [inputValue, setinputValue] = useState('');
    const handleinputchange = (e)=>{
        setinputValue(e.target.value);

    }
    const handleSubmit = (e)=> {
        e.preventDefault();
        if(inputValue.trim().length >0)
        setCategories(cats => [ inputValue, ...cats])
    }
    return (
        <form onSubmit = {handleSubmit}>
            <input type = "text"
            value = {inputValue}
            onChange = { handleinputchange}></input>
        </form>
    )
}

CategoriAdd.prototype = {
    setCategories: PropTypes.func.isRequired
}
