import '@/components/nav/nav.css'
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
export const Nav = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    const menuOpened = () => {
        setMenuOpen(!menuOpen)
    }
    return (
        <div className="nav-container">
            <ul className='mobile-menu-icon'>
                <li>
                    <IoMdMenu onClick={menuOpened} size={40} />
                </li>
            </ul>
            <div className={`container-menu ${menuOpen ? "menu-opened" : ""}`}>
                <ul className="logo">
                    <li>Coffee Breathing</li>
                </ul>
                <ul className="menu-links flex">
                    <li className="links"><a href="#">Home</a></li>
                    <li className='arrow'><IoIosArrowDown/></li>
                    <li className="links"><a href="#">Know</a></li>
                    <li className="links"><a href="#">Products</a></li>
                    <li className="links"><a href="#">Make a Book</a></li>
                </ul>
                <ul className="socials">
                    <li className='socials-icons'>
                        <a href="#" target='_blank'>
                            <FaYoutube color="#fff" size={40} />
                        </a>
                    </li>
                    <li className='socials-icons'>
                        <a href="#" target='_blank'>
                            <FaLinkedin size={30} color='#fff' />
                        </a>
                    </li>
                    <li className='socials-icons'>
                        <a href="#" target='_blank'>
                            <FaGithubSquare color='#fff' size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}