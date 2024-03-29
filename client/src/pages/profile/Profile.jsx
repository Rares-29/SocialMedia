import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import PlaceIcon from '@mui/icons-material/Place';
import LanguageIcon from '@mui/icons-material/Language';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import "./profile.scss"
import Posts from "../../components/Posts/Post.jsx"


const Profile = () => {
 return (
    <div className = "profile">
      <div className = "images">
        <img src ="/assets/cutu2.jpeg" alt = "" className = "cover"/>
        <img src = "/assets/cutu3.jpeg" alt = "" className = "profilePic"/> 
      </div>
      <div className = "profileContainer">
        <div className = "uInfo">
          <div className = "left">
            
            <a href="http://facebook.com">
              <FacebookTwoToneIcon fontSize = "medium"/>
            </a>
            <a href="http://facebook.com">
              <InstagramIcon fontSize = "medium"/>
            </a>
            <a href="http://facebook.com">
              <TwitterIcon fontSize = "medium"/>
            </a>
            <a href="http://facebook.com">
              <LinkedInIcon fontSize = "medium"/>
            </a>
            
          </div>
          <div className = "center">
            <span>Sandu Rares</span>
            <div className = "info">
              
              <div className = "item">
                <PlaceIcon fontSize="small"/>
                <span>USA</span>
              </div>  
              <div className = "item">
                <LanguageIcon fontSize="small"/>
                <span>github.com/Rares-29</span>
              </div>  
            </div>
            <button>Follow</button>
            
          </div>
          <div className = "right">
            <EmailOutlinedIcon/>
            <MoreVertIcon/>
          </div>  
        </div>
      </div>
      <Posts/>
    </div>
  )
}

export default Profile