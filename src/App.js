import React, {useState,useRef, useEffect} from 'react';
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
  const [hobbyWord, setHobbyWord] = useState("");
  const [currentWord, setCurrentWord] = useState("");
  const [letterIndex, setLetterIndex] = useState(0);
  const workRef = useRef(null);
  const skillsRef = useRef(null);
  const quoteRef = useRef(null);
  const aboutRef = useRef(null);
  const homeRef = useRef(null);

  let hobbyList = ["Create", "Dream", "Learn", "Explore", "Build", "Live"];

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

  useEffect(() => {
    let index = 0;

    const intervalId = setInterval(() => {
      setHobbyWord(hobbyList[index]);
      setLetterIndex(0);
      setCurrentWord("");
      index += 1;
      if (index === hobbyList.length) {
        index = 0
      }
    }, 3000);

    return () => clearInterval(intervalId); // Cleanup on unmount
  },[])

  useEffect(() => {
    const letterIntervalId = setInterval(() => {
      
      if (letterIndex == hobbyWord.length) { 
        return () => {}
      } else {
        setCurrentWord((prevWord) => {
          let new_word = prevWord + hobbyWord[letterIndex];
          return new_word;
        })
        setLetterIndex((prev) => prev += 1);
      }
    }, 250);
    return () => clearInterval(letterIntervalId); // Cleanup on unmount
  }, [hobbyWord, currentWord])

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
            <p className='text-white mb-8 text-left lg:text-left text-7xl font-bold uppercase'>
              I Love To {currentWord} <span className='animate-ping text-7xl'>|</span>
            </p>
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
