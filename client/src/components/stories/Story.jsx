import React from 'react'
import "./story.scss"

const stories = [
    {
        id: "2",
        name: "Cutu",
        img: "/assets/cutu2.jpeg"
    },
    {
        id: "3",
        name: "Cindy",
        img: "/assets/cutu3.jpeg"
    },
    {
        id: "4",
        name: "Sweetie",
        img: "/assets/cutu4.jpeg"
    },
    {
        id: "5",
        name: "Cindy3",
        img: "/assets/cutu5.jpeg"
    }
]

 const Story = () => {
  return (
    <div className = "story">
        <div className = "item">
        <img src = "/assets/cutu.jpeg"/>
        <span>Add to your story</span>
        </div>
        {stories.map(story => {
            return(
                <div key = {story.id} className = "item">
                    <img src = {story.img} />
                    <span>{story.name}</span>
                </div>
                )
        })}
    </div>
  )
}

export default Story;
