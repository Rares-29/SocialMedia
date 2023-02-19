import React from 'react'
import "./leftBar.scss"
const leftBar = () => {
  return (
    <div className = "leftbar">
      <div className = "menu">
        <div className = "item">
          <img src = ""></img>
          <span>User</span>
        </div>
        <div className = "item">
          <img src = ""></img>
          <span>Friends</span>
        </div>
        <div className = "item">
          <img src = ""></img>
          <span>Groups</span>
        </div>
        <div className = "item">
          <img src = ""></img>
          <span>Marketplace</span>
        </div>
        <div className = "item">
          <img src = ""></img>
          <span>Watch</span>
        </div>
      </div>
      <hr/>
      <div className = "menu">
        <p>Your shortcuts</p>
        <div className = "item">
          <img src = ""></img>
          <span>Events</span>
        </div>
        <div className = "item">
          <img src = ""></img>
          <span>Gaming</span>
        </div>
        <div className = "item">
          <img src = ""></img>
          <span>Gallery</span>
        </div>
        <div className = "item">
          <img src = ""></img>
          <span>Videos</span>
        </div>
        <div className = "item">
          <img src = ""></img>
          <span>Messages</span>
        </div>
      </div>
      <hr/>
      <div className = "menu">
        <p>Others</p>
        <div className = "item">
          <img src = ""></img>
          <span>Fundraiser</span>
        </div>
        <div className = "item">
          <img src = ""></img>
          <span>Tutorials</span>
        </div>
        <div className = "item">
          <img src = ""></img>
          <span>Courses</span>
        </div>
      </div>
    </div>
  )
}

export default leftBar