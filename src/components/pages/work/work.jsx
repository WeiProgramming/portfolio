import React, {useState,useEffect, useRef, forwardRef} from 'react'

import './work.scss'
import cap from './../../../assets/cap-logo.png'
import pp from './../../../assets/patient-partner-logo.svg'
import sp from './../../../assets/smart-property-nav-logo.png'
import pl from './../../../assets/paymentlink-logo.svg'
import js from './../../../assets/johnshipp-home.png'
import pbg2 from './../../../assets/background-purple2.jpg'

import caphome from './../../../assets/costcoauto-home.PNG'
import promohome from './../../../assets/costcoauto-promo.PNG'
import rdhome from './../../../assets/rightdev-home.PNG'
import gchome from './../../../assets/giftcash-home.PNG'
import schome from './../../../assets/swiftchange-home.PNG'
import sphome from './../../../assets/sp-home.PNG'

import jshome from './../../../assets/johnshipp-homecap.PNG'
import plhome from './../../../assets/paymentlink-home.PNG'

import blob from '../../../assets/pattern1.svg'


const WorkPageComponent = forwardRef((props, ref) => {
    const {freeze, freezePage} = props;
    const [scrollPosition, setScrollPosition] = useState(0);
    const [workBlockPosY, setWorkBlockPosY] = useState({});
    let [webcap, toggleShowWebCap] = useState(false);
    const addedRefs = useRef(new Set());
    const workBlockRef = useRef([]);
    let showImgRef = useRef(null);
    let [currentImg, setCurrentImg] = useState(null)
    
    const retrieveEl = (elRef) => {
        if (elRef && !addedRefs.current.has(elRef)) {
            workBlockRef.current.push(elRef);
            addedRefs.current.add(elRef);
        }
    };

    useEffect(() => {
        if (webcap && freeze) {
            showImgRef.current.src = currentImg;
            showImgRef.current.style.display = "flex";
        }
    },[freeze])
    

    useEffect(() => {
        const getElementYPos = (elRefs) => {
            const positions = {};
            elRefs.current.forEach((el) => {
                
                if (el) {
                    positions[el.getBoundingClientRect().top + window.scrollY] = el;
                }
            });
            setWorkBlockPosY(positions);
            
        };
        getElementYPos(workBlockRef);
    
    }, []);

    useEffect(() => {
        
        const handleScroll = () => {
            setScrollPosition(window.scrollY + (window.innerHeight)/2);
        };
        window.addEventListener('scroll', handleScroll);
        
        // if the scroll > an element position 
        Object.entries(workBlockPosY).forEach(([posY, el]) =>{
            if (scrollPosition > posY) {
        
                el.classList.add('show-img');
            } else {
                el.classList.remove('show-img');
            };
        });
        
        // set the class of css

        return () => {
            window.removeEventListener('scroll', handleScroll)
        };
    }, [scrollPosition, setScrollPosition]);


    return (
        <div className='work' ref={ref}>
            <div className={`image-overlay ${(freeze && webcap) ? 'z-50' : 'z-0'}`}></div>
            <div className='show-webcap' style={{display: (freeze && webcap) ? 'flex' : 'none'}} onClick={
                () => {freezePage(); toggleShowWebCap(!webcap);}}>
                <img src={caphome} ref={showImgRef}/>
            </div>
            <div className='z-30 relative'>
            <div className='work-header'>
                <h1 className='text-4xl font-bold text-white'>Portfolio</h1>
            </div>
            <div className='logo-group'>
                <div className='logo-container'>
                    <img src={caphome} alt="costco auto program logo"/>
                </div>
                <div className='logo-container'>
                    <img src={rdhome} alt="patient partner logo" />
                </div>
                <div className='logo-container'>
                    <img src={sphome} alt="smart property logo" />
                </div>
                <div className='logo-container'>
                    <img src={schome} alt="payment link logo"/>
                </div>
                <div className='logo-container'>
                    <img src={plhome} alt="payment link logo"/>
                </div>
                <div className='logo-container'>
                    <img src={jshome} alt="payment link logo"/>
                </div>
                <div className='logo-container'>
                    <img src={promohome} alt="costco auto promo logo"/>
                </div>
            </div>
            <div className='work-details-container flex flex-col'>
                <div className='work-block flex flex-col-reverse lg:flex-row'>
                    <div className='work-description w-full lg:w-1/2'>
                        <h2 className='text-xl font-bold mb-4'>Costco Auto Program</h2>
                        <p>Software Engineer -
                            Worked on company's internal and external web applications through the .Net stack
                        </p>
                        <p>Front End Developer -
                            Participated in the design mock up and development of client facing websites</p>
                            <p>
                            Technologies: Asp.net, MSSqlServer, HTML5, CSS3, JQuery
                            </p>
                    </div>
                    <div className='work-screencap w-full lg:w-2/4 relative' 
                    key={1} 
                    ref={(el) => retrieveEl(el)} 
                    onClick={(event) => {props.freezePage(); setCurrentImg(caphome); toggleShowWebCap(!webcap)}}>
                        <img src={caphome} alt="patient partner home screencap" />
                        <div className='gradient-block lg:w-full lg:h-full absolute -top-9 -right-10 -z-10'></div>
                    </div>
                </div>
                <div className='work-block flex flex-col lg:flex-row relative'>
                    <div className='work-screencap w-full lg:w-2/4' 
                    key={2} 
                    ref={(el) => retrieveEl(el)}
                    onClick={(event) => {props.freezePage(); setCurrentImg(rdhome); toggleShowWebCap(!webcap)}}>
                        <img src={rdhome} alt="patient partner home screencap" />
                        <div className='gradient-block lg:w-full lg:h-full absolute top-9 right-10 -z-10'></div>
                    </div>
                    <div className='work-description w-full lg:w-1/2'>
                        <h2 className='text-xl font-bold mb-4'>Patient Partner</h2>
                        <p>
                            Software Engineer -
                            Contributing in the development and refactor of web app codebase using PHP with the Laravel framework, 
                            JavaScript, HTML, and CSS. Through effective code decoupling and adherence to best 
                            practices, I achieved a significant improvement in website performance, speed, and cost. 
                            Additionally, I deployed applications on AWS, leveraging various cloud features, 
                            including EC2 instances, RDS databases, and Route 53 configurations.
                        </p>
                        <p>
                            Technologies: PHP, javascript, html, css, bootstrap, webpack, npm, SQL database, Trello Laravel: mix, routing, service providers, authentication, facade, middleware, migration
                        </p>
                    </div>
                </div>
                <div className='work-block flex flex-col-reverse lg:flex-row'>
                    <div className='work-description w-full lg:w-1/2'>
                        <h2 className='text-xl font-bold mb-4'>SmartProperty</h2>
                        <p>Software Engineer -
                            Worked on company's internal and external web applications through the .Net stack
                        </p>
                        <p>Front End Developer -
                            Participated in the design mock up and development of client facing websites</p>
                            <p>
                            Technologies: Asp.net, MSSqlServer, HTML5, CSS3, JQuery
                            </p>
                    </div>
                    <div className='work-screencap w-full lg:w-2/4 relative' 
                    key={1} 
                    ref={(el) => retrieveEl(el)} 
                    onClick={(event) => {props.freezePage(); setCurrentImg(sphome); toggleShowWebCap(!webcap)}}>
                        <img src={sphome} alt="patient partner home screencap" />
                        <div className='gradient-block lg:w-full lg:h-full absolute -top-9 -right-10 -z-10'></div>
                    </div>
                </div>
                <div className='work-block flex flex-col lg:flex-row'>
                    <div className='work-screencap w-full lg:w-2/4' 
                    key={4} 
                    ref={(el) => retrieveEl(el)}
                    onClick={(event) => {props.freezePage(); setCurrentImg(schome); toggleShowWebCap(!webcap)}}>
                        <img src={schome} alt="patient partner home screencap" />
                        <div className='gradient-block lg:w-full lg:h-full absolute -top-9 right-10 -z-10'></div>

                    </div>
                    <div className='work-description w-full lg:w-1/2'>
                        <h2 className='text-xl font-bold mb-4'>SwiftChange</h2>
                        <p>Software Engineer Intern</p>
                        <p>Collaborated with team members to develop new features and design and 
                            maintain SwiftChange's server and database. Implemented service provider 
                            APIs and conducted code documentation and code reviews to ensure quality 
                            and consistency across the codebase.</p>
                            <p>Technologies: REST Api, Laravel, Html, CSS, Reactjs</p>
                    </div>
                </div>
                <div className='work-block flex flex-col-reverse lg:flex-row'>
                    <div className='work-description w-full lg:w-1/2'>
                        <h2 className='text-xl font-bold mb-4'>Payment Link</h2>
                        <p>Web developer -
                        Assisted in the development of testing software for payment-based clients 
                        to verify the functionality of their web tools. Collaborated closely with 
                        management and developers in project planning and defining project scope.
                        </p>
                        <p>
                            Technologies: Vuejs, html, css, Laravel, PHP, javascript
                        </p>
                    </div>
                    <div className='work-screencap w-full lg:w-2/4 relative' 
                    key={5} 
                    ref={(el) => retrieveEl(el)}
                    onClick={(event) => {props.freezePage(); setCurrentImg(plhome); toggleShowWebCap(!webcap)}}>
                        <img src={plhome} alt="patient partner home screencap" />
                        <div className='gradient-block lg:w-full lg:h-full absolute top-9 -right-10 -z-10'></div>
                    </div>
                </div>
                <div className='work-block flex flex-col lg:flex-row'>
                    <div className='work-screencap w-full lg:w-2/4' 
                    key={4} 
                    ref={(el) => retrieveEl(el)}
                    onClick={(event) => {props.freezePage(); setCurrentImg(promohome); toggleShowWebCap(!webcap)}}>
                        <img src={promohome} alt="patient partner home screencap" />
                        <div className='gradient-block lg:w-full lg:h-full absolute -top-9 right-10 -z-10'></div>

                    </div>
                    <div className='work-description w-full lg:w-1/2'>
                        <h2 className='text-xl font-bold mb-4'>Costco Auto Program Promotions</h2>
                        <p>Software Engineer Intern</p>
                        <p>Software Engineer -
                            Worked on company's internal and external web applications through the .Net stack
                        </p>
                        <p>Front End Developer -
                            Participated in the design mock up and development of client facing websites</p>
                            <p>
                            Technologies: Asp.net, MSSqlServer, HTML5, CSS3, JQuery
                            </p>
                    </div>
                </div>
                <div className='work-block flex flex-col-reverse lg:flex-row'>
                    <div className='work-description w-full lg:w-1/2'>
                        <h2 className='text-xl font-bold mb-4'>John Shipp & Associates</h2>
                        <p>Full stack intern</p>
                        <p>Contributed to various web-based projects as requested by clients, 
                            participating in code reviews within an agile team environment. Collaborated 
                            closely with experienced developers to enhance project outcomes and improve code 
                            quality.
                        </p>

                        <p>
                            Technologies: Vuejs, html, css, Laravel, PHP, javascript
                        </p>
                    </div>
                    <div className='work-screencap w-full lg:w-2/4' 
                    key={5} 
                    ref={(el) => retrieveEl(el)}
                    onClick={(event) => {props.freezePage(); setCurrentImg(jshome); toggleShowWebCap(!webcap)}}>
                        <img src={jshome} alt="patient partner home screencap" />
                        <div className='gradient-block lg:w-full lg:h-full absolute -top-9 -right-10 -z-10'></div>

                    </div>
                </div>
            </div>
            </div>
        </div>
    );
});

export default WorkPageComponent;