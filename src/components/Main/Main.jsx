import React from 'react';
import MainIcons from '../MainIcons/MainIcons';
import '../Main/Main.css'
import MainTitles from '../MainTitles/MainTitles';
import MainImage from '../MainImage/MainImage';

const Main = () => {
  return (
    <main>
      <MainIcons />
      <article>
        <MainTitles />
        <MainImage />
      </article>
    </main>
  )
}

export default Main