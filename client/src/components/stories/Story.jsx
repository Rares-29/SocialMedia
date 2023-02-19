import React from 'react'
import "./story.scss"

const stories = [
    {
        id: "1",
        name: "John",
        img: "/assets/cutu.jpeg"
    },
    {
        id: "2",
        name: "John",
        img: "/assets/cutu.jpeg"
    },
    {
        id: "3",
        name: "John",
        img: "/assets/cutu.jpeg"
    },
    {
        id: "4",
        name: "John",
        img: "/assets/cutu.jpeg"
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
