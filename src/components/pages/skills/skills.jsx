import "./skills.scss";
import { GiPaintBrush } from "react-icons/gi";
import { FaGears } from "react-icons/fa6";
import { MdOutlineSecurity } from "react-icons/md";



const SkillsComponent = () => {
    return (
        <div className="skills flex flex-col p-24">
            <h2 className="text-center text-4xl text-white capitalize font-bold py-8">What I Do</h2>
            <ul className="flex flex-col justify-evenly items-center lg:flex-row">
                <li className="border-l-0 pl-8 p-6 lg:border-l-2">
                    <div className="skill-title flex flex-row justify-center text-4xl py-6">
                        <GiPaintBrush className="mr-4"/> Frontend</div>
                    <p className="text-2xl">
                        Build responsive mobile first web pages with long term scalability using cutting edge modern
                        frameworks and up-to-date methodologies.
                    </p>
                </li>
                <li className="border-l-0 pl-8 text-4xl p-6 lg:border-l-2">
                    <div className="skill-title flex flex-row justify-center py-6">
                        <FaGears className="mr-4"/> Backend</div>
                    <p className="text-2xl">
                        Integretion via server side architecture using frameworks such as Laravel or NodeJs. Integration of
                        RESTful services and data optimizations.
                    </p>
                </li>
                <li className="border-l-0 pl-8 text-4xl p-6 lg:border-l-2">
                    <div className="skill-title flex flex-row justify-center py-6">
                        <MdOutlineSecurity className="mr-4"/> Web Security</div>
                    <p className="text-2xl">
                        Deploy progressive web testing via passive and active reconnaissance and fuzzing tools through
                        the Kali suite for site vulnerabilities.
                    </p>
                </li>
            </ul>
        </div>
    )
}

export default SkillsComponent;