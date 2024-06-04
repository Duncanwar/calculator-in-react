import React from 'react'

export default function Button({handleClick, value, orange,red,green}) {
    const classes = `button ${orange ? 'orange' : ''} ${red ? 'red' : ''}`
  return (
    <button className={classes} onClick={()=> handleClick(value)}>{value}</button>
    )
}
