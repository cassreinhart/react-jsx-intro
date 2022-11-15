import React from 'react'

const Tweet = (props) => {
  return (
    <div>
        <h2>@{props.username}</h2>
        <small>By {props.name} on {props.date}</small>
        <p>{props.message}</p>
    </div>
  )
}

export default Tweet