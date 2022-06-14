import React from 'react'
import "../App.css"
import {FiSearch} from 'react-icons/fi'

const InputComponent = ({text, submit, click}) => {
  return (
    <form className="input" onSubmit={submit}>
        <input type={"text"} placeholder="Please enter location" className="input__value" onChange={text}/>
        <span className="input__icon" onClick={click}>
            <FiSearch size={28}/>
        </span>
    </form>
  )
}

export default InputComponent
