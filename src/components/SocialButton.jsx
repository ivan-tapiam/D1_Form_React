import React from 'react'

const SocialButton = (props) => {
  return (
    <div className='icons'>
      {props.icons.map((icon, index) => (
      <i key={index} className={`fa-brands fa-${icon} fa-2xl`}></i>
      ))}
    </div>
  )
}

export default SocialButton