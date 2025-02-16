import { useEffect, useState } from 'react';
import './navbar.css';
const Navbar = () => {
    const [scrolled, setScrolled] = useState<boolean>(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        }

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return (
        <nav className={!scrolled ? 'idleNav' : 'scrolledNav'}>
            <ul>
                <li> <a href="#home">Home</a> </li>
                <li> <a href="#about">About</a> </li>
                <li> <a href="#projects">Projects</a> </li>
                <li> <a href="#contact">Contact</a> </li>

            </ul>

        </nav>
    );
}

export default Navbar;