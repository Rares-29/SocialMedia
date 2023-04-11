import React from 'react'
import "./leftBar.scss"
const leftBar = () => {
  return (
    <div className = "leftbar">
      <div className = "menu">
        <div className = "item">
          <img className = "user" src = "/assets/cutu3.jpeg"></img>
          <span>Profile</span>
        </div>
        <div className = "item">
          <img src = "/assets/1.png"></img>
          <span>Friends</span>
        </div>
        <div className = "item">
          <img src = "/assets/2.png"></img>
          <span>Groups</span>
        </div>
        <div className = "item">
          <img src = "/assets/3.png"></img>
          <span>Marketplace</span>
        </div>
        <div className = "item">
          <img src = "/assets/4.png"></img>
          <span>Watch</span>
        </div>
      </div>
      <hr/>
      <div className = "menu">
        <p>Your shortcuts</p>
        <div className = "item">
          <img src = "/assets/6.png"></img>
          <span>Events</span>
        </div>
        <div className = "item">
          <img src = "/assets/7.png"></img>
          <span>Gaming</span>
        </div>
        <div className = "item">
          <img src = "/assets/8.png"></img>
          <span>Gallery</span>
        </div>
        <div className = "item">
          <img src = "/assets/9.png"></img>
          <span>Videos</span>
        </div>
        <div className = "item">
          <img src = "/assets/10.png"></img>
          <span>Messages</span>
        </div>
      </div>
      <hr/>
      <div className = "menu">
        <p>Others</p>
        <div className = "item">
          <img src = "/assets/13.png"></img>
          <span>Fundraiser</span>
        </div>
        <div className = "item">
          <img src = "/assets/11.png"></img>
          <span>Tutorials</span>
        </div>
        <div className = "item">
          <img src = "/assets/12.png"></img>
          <span>Courses</span>
        </div>
      </div>
    </div>
  )
}

export default leftBar