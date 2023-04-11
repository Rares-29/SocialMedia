import React from 'react'
import "./rightBar.scss"
const rightBar = () => {
  return (
    <div className = "rightBar">
    <div className = "menu">
      <p>Suggestions for you</p>
      <div className = "item">
        <div className = "user">
          <img src = "/assets/cutu2.jpeg"></img>
          <span>John Smith</span>
        </div>
        <div className = "buttons">
          <button className = "btn1">Follow</button>
          <button className = "btn2">Dismiss</button>
        </div>
        </div>
        <div className = "item">
        <div className = "user">
          <img src = "/assets/cutu4.jpeg"></img>
          <span>Cindy</span>
        </div>
        <div className = "buttons">
          <button>Follow</button>
          <button>Dismiss</button>
        </div>
        </div>
      </div>
      <div className = "menu">
        <p>Latest activities</p>
        <div className = "item">
        <p><span className = "bold">Cindy</span> changed her cover picture</p>
        <span class = "time">1 minute ago</span>
        </div>
        <div className = "item">
        <p><span className = "bold">Cindy</span> changed her cover picture</p>
        <span class = "time">1 minute ago</span>
        </div>
        <div className = "item">
        <p><span className = "bold">Cindy</span> changed her cover picture</p>
        <span class = "time">1 minute ago</span>
        </div>
        <div className = "item">
        <p><span className = "bold">Cindy</span> changed her profile picture</p>
        <span class = "time">1 minute ago</span>
        </div>
      </div>
      <div className = "menu">
        <p>Online Friends</p>
        <div className = "item">
        <div className = "user" >
        <img src = "assets/cutu2.jpeg"/>
        <p className = "bold">Cindy</p>
        </div>
        <div class = "active"></div>
        </div>
        <div className = "item">
        <div className = "user" >
        <img src = "/assets/cutu2.jpeg"/>
        <p className = "bold">Cindy</p>
        </div>
        <div class = "active"></div>
        </div>
        <div className = "item">
        <div className = "user" >
        <img src = "/assets/cutu2.jpeg"/>
        <p className = "bold">Cindy</p>
        </div>
        <div class = "active"></div>
        </div>
        <div className = "item">
        <div className = "user" >
        <img src = "/assets/cutu2.jpeg"/>
        <p className = "bold">Cindy</p>
        </div>
        <div class = "active"></div>
        </div>

      </div>
    </div>
  )
}

export default rightBar