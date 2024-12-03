import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) =>{
    const {name} = props
  return (
    <button>{name}</button>
  )
}
Button.defaultProps = {
  name : "Default"
}

Button.PropTypes = {
  name : PropTypes.string
}
export default Button