import React, { useState, useMemo } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Intro from '../Intro/Intro';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import './Main.css';
import { checkBrowser } from '../utilities';

const Main = ({ nightMode, toggleNightMode }) => {
  const [src, setSrc] = useState(process.env.PUBLIC_URL + '/images/pixcomp.jpg');
  const { isChrome, isFirefox } = checkBrowser();

  const cannotUseWebp = !isChrome && !isFirefox;

  const myImg = cannotUseWebp
    ? process.env.PUBLIC_URL + '/images/computer.png'
    : process.env.PUBLIC_URL + '/images/computer.webp';

  useMemo(() => {
    const imageToLoad = new Image();
    imageToLoad.src = myImg;
    imageToLoad.onload = () => {
      setSrc(myImg);
    };
  }, [myImg]);

  return (
    <div className='main'>
      <NavBar theme={nightMode} toggleNightMode={toggleNightMode} />
      <Intro src={src} cannotUseWebp={cannotUseWebp} />
      <About />
      <Projects src={src} cannotUseWebp={cannotUseWebp} />
      <Contact />
    </div>
  );
};

export default Main;
