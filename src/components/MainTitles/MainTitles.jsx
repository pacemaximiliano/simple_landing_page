import React from 'react'
import '../MainImage/MainImage.css'
import {IoMdArrowDropdownCircle} from 'react-icons/io'
import '../MainTitles/MainTitles.css'


const MainTitles = () => {
  return (
    <section>
        <div className='section-titles'>
            <h1>Welcome!</h1>
            <h5>Frontend developer</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut magni velit molestias!.</p>
            <button>Contact <IoMdArrowDropdownCircle /></button>
        </div>
    </section>
  )
}

export default MainTitles