import React from 'react'

const Badge = ({variant,text}) => {
  return (
    <div className={`badge ${variant}`}>{text}</div>
  )
}

export default Badge