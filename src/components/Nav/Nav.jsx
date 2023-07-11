import React from "react";
import SocialIconsMood from "../SocialIconsMood/SocialIconsMood";
import '../Nav/Nav.css';

const Nav = () => {
    return (
        <nav>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>Contact</li>
                <li className="mood-item"><SocialIconsMood /></li>
            </ul>
        </nav>
    )
}

export default Nav;

const MoodItem = document.querySelector('.mood-item');
const BodyVery = document.querySelector('#body');

MoodItem.addEventListener('click', ()=>{
    BodyVery.classList.toggle('mood')
})