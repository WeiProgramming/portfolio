import './whoami.scss';
import fb_logo from '../../../assets/firebase-logo.png';
import kali_logo from '../../../assets/kali-logo.png';
import laravel_logo from '../../../assets/laravel-logo.png';
import node_logo from '../../../assets/nodejs-logo.png';
import react_logo from '../../../assets/reactjs-logo.png';

function WhoamiPage() {
    return (
        <div className='about'>
            <div className="about-container flex flex-col items-center justify-center">
                <div className="w-2/4">
                    <h2 className='capitalize text-center text-5xl py-16 font-bold'>About Me</h2>
                    <p className='text-2xl text-center'>
                        I'm a passionate software developer that excels in code optimization, scaling, and performance.
                        I strive for clean code with an emphasis on security. I work and make sure requirements
                        and team responsibilities are met.
                    </p>
                </div>
                <ul className="flex px-32 py-32 w-full justify-between items-center flex-col lg:flex-row">
                    <li className='uppercase text-2xl font-bold'>
                        <img src={react_logo} alt="reactjs logo"/>
                        <p className='text-center'>ReactJS</p>
                    </li>
                    <li className='uppercase text-2xl font-bold'>
                        <img src={node_logo} alt="nodejs logo"/>
                        <p className='text-center'>NodeJS</p>
                    </li>
                    <li className='uppercase text-2xl font-bold'>
                        <img src={laravel_logo} alt="laravel logo"/>
                        <p className='text-center'>Laravel</p>
                    </li>
                    <li className='uppercase text-2xl font-bold'>
                        <img src={fb_logo} alt="firebase logo"/>
                        <p className='text-center'>Firebase</p>
                    </li>
                    <li className='uppercase text-2xl font-bold'>
                        <img src={kali_logo} alt="kali logo"/>
                        <p className='text-center'>Kali Suite</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default WhoamiPage