import React from 'react'

function IconLink(props) {
  const { link, title, icon, count } = props
  return (
    <a href={link} target={'_blank'} rel="noopener noreferrer">
      <i style={{ color: 'black' }} className={icon} /> {title}
     
    </a>
  )
}

export default IconLink
