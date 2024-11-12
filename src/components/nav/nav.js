import { forwardRef } from 'react';
import './nav.scss'

const NavComponent = ({refs,scroll}) => {
    const [homeRef, aboutRef, quoteRef, skillsRef, workRef] = refs;
    return (
        <div className='nav z-50 right-0 top-0 flex flex-col w-full lg:flex-row lg:w-2/4 lg:fixed'>
            <button onClick={() => scroll(homeRef)} className="font-bold text-xl w-full text-left lg:w-1/4 mb-2 py-10">Home</button>
            <button onClick={() => scroll(aboutRef)} className="font-bold text-xl w-full text-left lg:w-1/4 mb-2 py-10">About</button>
            <button onClick={() => scroll(quoteRef)} className="font-bold text-xl w-full text-left lg:w-1/4 mb-2 py-10">Quote</button>
            <button onClick={() => scroll(skillsRef)} className="font-bold text-xl w-full text-left lg:w-1/4 mb-2 py-10">What I Do</button>
            <button onClick={() => scroll(workRef)} className="font-bold text-xl w-full text-left lg:w-1/4 mb-2 py-10">Work</button>
        </div>
    )
}

export default NavComponent;