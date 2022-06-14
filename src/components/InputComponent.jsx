import React from 'react'
import "../App.css"
import {FiSearch} from 'react-icons/fi'

const InputComponent = () => {
  return (
    <form className="input">
        <input type={"text"} placeholder="Please enter location" className="input__value"/>
        <span className="input__icon">
            <FiSearch size={28}/>
        </span>
    </form>
  )
}

export default InputComponent
