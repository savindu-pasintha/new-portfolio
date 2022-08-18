import React from 'react'

function SocialIcon(props) {
  const { link, icon, label, count } = props
  return (
    <a target="_blank" aria-label={label} rel="noopener noreferrer" href={link}>
      <i className={icon} aria-hidden="true" />
      <span style={{ color: 'white', fontSize: '8px' }}>
        {icon === 'fa fa-github' ? <>{`git ` + count}</> : ` ` + label}
      </span>
    </a>
  )
}

export default SocialIcon
