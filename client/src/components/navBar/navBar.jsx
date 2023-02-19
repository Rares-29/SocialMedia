import React from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';import SearchIcon from '@mui/icons-material/Search';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import "./navbar.scss"
import { Link } from "react-router-dom";


const navBar = () => {
  return (
    <div className = "navbar">
    <div className = "left">
    <Link to="/" style={{textDecoration: "none"}}>
      <span>LogiCreation</span>
    </Link>
      <HomeOutlinedIcon/>
      <DarkModeOutlinedIcon/>
      <GridViewOutlinedIcon/>
      <div className = "search">
        <SearchIcon/>
        <input type = "text" placeholder = "Search..."/>
      </div>
    </div>      
    <div className = "right">
      <PersonOutlinedIcon/>
      <EmailOutlinedIcon/>
      <NotificationsNoneOutlinedIcon/>
      <div className = "user">
        <img src = ""></img>
        <span>John Doe</span>
      
      </div>
    </div>
    </div>
  )
}

export default navBar