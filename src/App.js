import React, {useState,useRef} from 'react';
import './index.css';
import './App.scss';
import WorkPageComponent from './components/pages/work/work.jsx'
import WhoamiPage from './components/pages/whoami/whoami.jsx';
import hero from './assets/background-purple.jpg';


function App() {
  const [slide, setSlide] = useState(false);
  const [freeze, setFreeze] = useState(false);
  const sectionRef = useRef(null);

  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const freezePage = () => {
    setFreeze(prevFreeze => {
      prevFreeze = !prevFreeze;
      if (prevFreeze == true) {
        document.body.style.overflow="hidden";
      } else {
        document.body.style.overflow="";
      }
      return prevFreeze;
    });
  }

  const toggleSlide = () => {
    setSlide(prevSlide => !prevSlide);
  }


  return (
    <div className="App">
      {freeze ? 
        <div className='freeze-page-overlay' onClick={() => {freezePage(); toggleSlide()}}></div>
       : <div></div>}
      
      <div className='hero'>
        <div className='img-container'>
          <img src={hero} alt="hero"/>
          <div className='img-overlay'></div>
          <div className='hero-block'>
            <h1 className='mb-4'>Welcome to my Page!</h1>
            <div className='btn-group flex flex-col lg:flex-row'>
              <button className="w-full lg:w-1/4" onClick={() => scrollToSection()}>Work</button>
              <button className="w-full lg:w-1/4" onClick={() => {toggleSlide(); freezePage()}}>Whoami</button>
              <button className="w-full lg:w-1/4">Contact</button>
            </div>
          </div>
        </div>
        <WhoamiPage slideState={slide} toggleSlide={toggleSlide} freezePage={freezePage}/>
      </div>

      <WorkPageComponent ref={sectionRef} freezePage={freezePage} freeze={freeze}/>
    </div>
  );

}

export default App;
