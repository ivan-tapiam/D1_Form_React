import React from 'react'

const Alert = ({color, msg}) => {
  return (
    <>
      <p className={color}>{msg}</p> 
    </>
  )
}

export default Alert