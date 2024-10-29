import './whoami.scss';
import { IoCloseSharp } from "react-icons/io5";


function WhoamiPage({slideState,toggleSlide,freezePage}){
    return (
        <div className={`about ${!slideState ? 'container-slide' : ''}`}>
            <div className="about-container">
                <button onClick={() => {toggleSlide(); freezePage()}}><IoCloseSharp /></button>
                <div>
                    <p className='leading-7'>wei@kali[/home~$] whoami</p>
                    <p className='leading-7'>
                        wei@kali[/home~$] A passionate and curious person who loves exploring and discovering new things.
                        Who work primarily with web based products from frontend frameworks to backend servers.
                        I've recently taken an interest in cyber security so I've been scouring the web
                        testing under various bug bounty programs.
                        I’m also a proud cat owner, a self-proclaimed couch potato, and a quirky introvert.
                        When I’m not glued to my computer, you can find me at parks, lakes, or beaches, enjoying a
                        good hike and soaking up nature—because let’s be real, being cooped up all day isn’t great for
                        anyone in tech!
                    </p>

                    <p className='leading-7'>wei@kali[/home~$] Throughout my time in the tech world, I’ve been lucky to work with some
                        amazing developers and business owners on a bunch of cool projects across
                        different industries, like medical devices, real estate, the auto industry,
                        and fintech. I’ve experienced everything from the hustle of startup life in someone’s
                        garage to working at mid-sized companies. I’m used to wearing many hats to get things done,
                        and I love the challenge that comes with it!
                    </p>
                </div>
                {/* <div className='img-container'>
                    <img src={selfie} alt="picture of me and my cat"/>
                </div> */}
            </div>
        </div>
    )
}

export default WhoamiPage