import { backgroundImage } from "./BackgroundImage";
import './About.css';

const About = () => {
    return (
        <section id="about" className='about'>
            {backgroundImage}
            <h1>About</h1>
        </section>
    );
}

export default About;