import React from 'react'
import classe from "./Button.module.css"

const Button = ({value, handler}) => {
  return (
    <div className={value == "C" || value == "=" ? `${classe.calcBtns} ${classe.res}`: `${classe.calcBtns}`} 
    onClick={() => handler(value)}>
        {value}
    </div>
  )
}

export default Button