import React, {useState,useRef} from 'react';
import './index.css';
import './App.scss';
import WorkPageComponent from './components/pages/work/work.jsx'
import WhoamiPage from './components/pages/whoami/whoami.jsx';
import hero from './assets/lifestyle_me.jpg';
import NavComponent from './components/nav/nav.js';
import QuoteComponent from './components/pages/quote/quote.jsx';
import SkillsComponent from './components/pages/skills/skills.jsx';
import ContactPage from './components/pages/contact/contact.jsx';


function App() {
  const [slide, setSlide] = useState(false);
  const [freeze, setFreeze] = useState(false);
  const workRef = useRef(null);
  const skillsRef = useRef(null);
  const quoteRef = useRef(null);
  const aboutRef = useRef(null);
  const homeRef = useRef(null);



  const scrollToSection = (elRef = null) => {
    if(elRef !== null) {
      elRef.current.scrollIntoView({ behavior: 'smooth' });
    } 
    return
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
    <div className="App relative ">
      <NavComponent scroll={scrollToSection} refs={[homeRef,aboutRef,quoteRef,skillsRef,workRef]}></NavComponent>
      <ContactPage></ContactPage>

      {freeze ? 
        <div className='freeze-page-overlay' onClick={() => {freezePage(); toggleSlide()}}></div>
       : <div></div>}
      
      <div className='hero shadow-2xl' ref={homeRef}>
        <div className='img-container relative'>
          <img src={hero} alt="hero"/>
          <div className='img-overlay'></div>
          <div className='hero-block text-left absolute top-72 right-0 w-2/4'>
            <h1 className='text-xl mb-4 capitalize'>Hi I'm Wei Leung</h1>
            <p className='text-white mb-8 text-left lg:text-left text-7xl font-bold uppercase'>I Love To Create</p>
            <div className='border-l-4 p-4'>
              <h2 className='text-2xl font-bold capitalize mb-2'>USA</h2>
              <p className="text-lg" >San Diego</p>
            </div>
            
          </div>
        </div>
      </div>
      <div ref={aboutRef}>
          <WhoamiPage />
      </div>
      <div ref={quoteRef}>
        <QuoteComponent ></QuoteComponent>
      </div>
      <div ref={skillsRef}>
        <SkillsComponent  ></SkillsComponent>
      </div>
      <div ref={workRef}>
        <WorkPageComponent ref={workRef} freezePage={freezePage} freeze={freeze}/>
      </div>

      
    </div>
  );

}

export default App;
