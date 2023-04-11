import React, {useState} from 'react'
import "./comments.scss"


const comments = [
    {
        id: 2, 
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        name: "Cindy catelu",
        userId: 2,
        profilePicture: "assets/cutu2.jpeg"
    },
    {
        id: 2, 
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        name: "Cindy catelu",
        userId: 2,
        profilePicture: "assets/cutu2.jpeg"
    },
    {
        id: 2, 
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        name: "Cindy catelu",
        userId: 2,
        profilePicture: "assets/cutu2.jpeg"
    },
    {
        id: 2, 
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        name: "Cindy catelu",
        userId: 2,
        profilePicture: "assets/cutu2.jpeg"
    },
    {
        id: 2, 
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        name: "Cindy catelu",
        userId: 2,
        profilePicture: "assets/cutu2.jpeg"
    },
    {
        id: 2, 
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        name: "Cindy catelu",
        userId: 2,
        profilePicture: "assets/cutu2.jpeg"
    },
    {
        id: 2, 
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        name: "Cindy catelu",
        userId: 2,
        profilePicture: "assets/cutu2.jpeg"
    }
]

const currentUser = "/assets/cutu2.jpeg";


const Comments = () => {
  return (
    <div className = "comments">
        <div className = "write">
            <img src = {currentUser}/>
            <input type = "text" placeHolder = "write a comment"/>
            <button>Send</button>
        </div>
        {comments.map(comment => {
            return(
                <div className = "comment">
                    <img src = {comment.profilePicture}/>
                    <div key = {comment.id} className = "content">
                        <span>{comment.name}</span>
                        <p>{comment.desc}</p>
                    </div>
                    <span className = "time">1 hour ago</span>
                </div>
                
        )})}
    
    </div>
  )
}

export default Comments