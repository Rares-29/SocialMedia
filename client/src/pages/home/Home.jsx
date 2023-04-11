import React from 'react'
import Story from "../../components/stories/Story"
import Post from "../../components/Posts/Post"
function Home() {
  return (
    <div className = "home" style = {{backgroundColor:"#f7f7f7", padding: "10px 30px 0 20px"}}>
    <Story/>
    <Post/>
    </div>
  )
}

export default Home