import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
const Header = () => {
  return (
    <div className = "gpt3__header section__padding" id = "home">
      <div className = "gpt3__header-content">
        <h1 className = "gradient__text">Let's talk about how amazing Killjoy main Vessna3D is</h1>
        <p>Vessna3D is a solid Killjoy main that utilizes her abilities to their fullest potential
          He goes the extra mile to learn the best bot placements as well as revolutionary molly line
          ups
        </p>
        <div className = "gpt3__header-content__input">
          <input type = "email" placeholder = "Your email address"></input>
          <button type = "button"> Get Started</button>
        </div>

        <div className = "gpt3__header-content__people">
          <img src = {people} alt = "people"/>
          <p>1,600 people enjoy Vessna3D's Killjoy</p>
        </div>
        <div className = "gpt3_header-image">
          <img src = {ai} alt = "ai"></img>
        </div>
      </div>
    </div>
  )
}

export default Header