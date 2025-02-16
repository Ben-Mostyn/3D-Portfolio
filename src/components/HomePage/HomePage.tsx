import './homepage.css';
import { backgroundImage } from './SVG';
const HomePage = () => {
    return (
        <section id='home' className='homePage'>
            {backgroundImage}
            <h1>Homepage</h1>

        </section>
    );
}

export default HomePage;