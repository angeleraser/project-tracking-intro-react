import React from 'react'
import "../../css/CtaButton.css"
const Button = ({label}) => {
  return (
    <button className="cta-btn">
      {label}
    </button>
  )
}

export default Button
