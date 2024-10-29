import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import './contact.scss'


function ContactPage() {
    return (
        <div className="contact">
            <div className="contact-container">
                <div className="social-media-grp">
                    <div className="logo">
                        <a href="https://github.com/WeiProgramming" ><FaGithub/></a>
                    </div>
                    <div className="logo">
                        <a href="https://www.linkedin.com/in/wei-leung/" ><FaLinkedin/></a>
                    </div>
                </div>
                <p>Designed by @Wei-2024</p>
            </div>
        </div>
    )
}

export default ContactPage