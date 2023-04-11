import React, {useState} from 'react'
import {Link} from "react-router-dom";
import "./Post.scss"
import Comments from "./Comments.jsx"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
const posts = [
  {
      id: 1,
      name: "Cutu",
      userId: 1, 
      img: "/assets/cutu2.jpeg",
      profilePic: "/assets/cutu2.jpeg",
      desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et tortor consequat id porta nibh."
  },
  {
      id: 3,
      name: "Cindy",
      userId: 2,
      img: "/assets/cutu3.jpeg",
      profilePic: "/assets/cutu2.jpeg",
      desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et tortor consequat id porta nibh."

  },
  {
      id: 4,
      name: "Sweetie",
      userId: 3, 
      img: "/assets/cutu4.jpeg",
      profilePic: "/assets/cutu2.jpeg",
      desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et tortor consequat id porta nibh."

  },
  {
      id: 5,
      name: "Cindy3",
      userId: 4, 
      img: "/assets/cutu5.jpeg",
      profilePic: "/assets/cutu2.jpeg",
      desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et tortor consequat id porta nibh."

  }
]

//Temporary
const liked = true;



const Post = () => {

  const [visible, setVisible] = useState(false);
  const setComments = (v) =>
    {
      setVisible(v);
    }
  return (
    <div className= "posts">
    {posts.map(post => {
      return(
      <div key = {post.id} className = "Post">
        <div className = "userDetails">
          <div className = "user">
            <img src = {post.profilePic} />
            <div className = "details">
            <Link to = {"profile/" + post.userId} style = {{textDecoration: "none", color: 'inherit' }}>
            <p>{post.name}</p>
            </Link>
            <span>2 minutes ago</span>
            </div>
          </div>
          <MoreHorizIcon/>
        </div>
        <div className = "content">
          <p>{post.desc}</p>
          <img src = {post.img}></img>
        </div>
        <div className = "info">
          <div className = "item">          
            {liked? <FavoriteBorderIcon/>
             : <HeartBrokenIcon/> }
            <span>12 Likes</span>
          </div>
          <div className = "item" onClick = {() => setComments(!visible)}>
            <TextsmsOutlinedIcon/>
            <span>Comments</span>
          </div>
          <div className = "item">
            <ShareOutlinedIcon/>
            <span>Share</span>
          </div>
        </div>
        {visible && <Comments/>}
      </div>
      )
    })}
    </div>
  )
}

export default Post