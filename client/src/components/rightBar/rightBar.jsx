import React from 'react'
import "./rightBar.scss"
const rightBar = () => {
  return (
    <div className = "rightBar">
    <div className = "menu">
      <p>Suggestions for you</p>
      <div className = "item">
      <div className = "user">
        <img src = ""></img>
        <span>John Smith</span>
      </div>
      <div className = "buttons">
        <button className = "btn1">Follow</button>
        <button className = "btn2">Dismiss</button>
      </div>
      </div>
      <div className = "item">
      <div className = "user">
        <img src = ""></img>
        <span>John Smith</span>
      </div>
      <div className = "buttons">
        <button>Follow</button>
        <button>Dismiss</button>
      </div>
      </div>
    </div>
    </div>
  )
}

export default rightBar