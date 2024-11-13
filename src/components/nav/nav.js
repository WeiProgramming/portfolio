import { forwardRef, useState } from 'react';
import './nav.scss'
import { IoIosHome } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";


const NavComponent = ({refs,scroll}) => {
    let [isMobileCollapsed, setIsMobileCollapsed] = useState(false);

    const toggleShowMobileNav = () => {
        setIsMobileCollapsed(!isMobileCollapsed)
    }
 

    const [homeRef, aboutRef, quoteRef, skillsRef, workRef] = refs;
    return (
        <div>
            <div className='nav z-50 right-0 top-0 flex flex-row w-2/4 fixed max-md:hidden'>
                <button onClick={() => scroll(homeRef)} className="font-bold text-xl w-full text-left lg:w-1/4 mb-2 py-10">Home</button>
                <button onClick={() => scroll(aboutRef)} className="font-bold text-xl w-full text-left lg:w-1/4 mb-2 py-10">About</button>
                <button onClick={() => scroll(quoteRef)} className="font-bold text-xl w-full text-left lg:w-1/4 mb-2 py-10">Quote</button>
                <button onClick={() => scroll(skillsRef)} className="font-bold text-xl w-full text-left lg:w-1/4 mb-2 py-10">What I Do</button>
                <button onClick={() => scroll(workRef)} className="font-bold text-xl w-full text-left lg:w-1/4 mb-2 py-10">Work</button>
            </div>

            <div className='nav z-50 right-0 top-0 flex flex-col w-full md:hidden'>
                <div 
                className='nav-mobile-header flex justify-center items-center p-4 border-b-2' 
                onClick={toggleShowMobileNav}><GiHamburgerMenu className='text-2xl' />
                </div>
                <div className={`nav-collapse ${isMobileCollapsed ? "block" : "hidden"}`}>
                    <button onClick={() => scroll(homeRef)} className="font-bold text-xl w-full text-left lg:w-1/4 mb-2 py-10 flex justify-center items-center">
                        <IoIosHome className='text-2xl' />
                    </button>
                    <button onClick={() => scroll(aboutRef)} className="font-bold text-xl w-full text-left lg:w-1/4 mb-2 py-10">About</button>
                    <button onClick={() => scroll(quoteRef)} className="font-bold text-xl w-full text-left lg:w-1/4 mb-2 py-10">Quote</button>
                    <button onClick={() => scroll(skillsRef)} className="font-bold text-xl w-full text-left lg:w-1/4 mb-2 py-10">What I Do</button>
                    <button onClick={() => scroll(workRef)} className="font-bold text-xl w-full text-left lg:w-1/4 mb-2 py-10">Work</button>
                </div>
            </div>
        </div>
        
    )
}

export default NavComponent;