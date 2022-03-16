import { VscCircleLargeFilled } from 'react-icons/vsc'
import Underline from './Underline'
import { skills } from './utils'
import '..//Style/About.css'

const About = () => {

    return (
        <div className="about" id='about'>
            <h1>About Me</h1>
            <Underline />
            <p>
                An Enthusiastic web developer specialize in MERN Stack technology along with Redux library. Experienced with all stages of the development cycle for dynamic web projects using various programming languages. Strong willing to be an asset for an organization.
            </p>
            <h4>Here are Few Skill Highlights:</h4>
            <div className="skill">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-item" style={{ letterSpacing: '1px' }}>
                        <VscCircleLargeFilled className="skill-icon" />{skill}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default About
