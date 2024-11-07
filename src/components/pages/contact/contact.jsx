import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import './contact.scss'


function ContactPage() {
    return (
        <div className="contact fixed z-50 left-0 flex top-52 text-white">
            <div className="flex flex-row sticky">
                <p className="text-2xl m-2">Follow Me</p>
                <div className="logo text-4xl m-2">
                    <a href="https://github.com/WeiProgramming" ><FaGithub /></a>
                </div>
                <div className="logo text-4xl m-2">
                    <a href="https://www.linkedin.com/in/wei-leung/" ><FaLinkedin /></a>
                </div>
            </div>
        </div>
    )
}

export default ContactPage