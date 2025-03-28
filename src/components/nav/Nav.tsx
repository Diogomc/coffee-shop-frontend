import '@/components/nav/nav.css'
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
export const Nav = () => {

    const [menuOpen, setMenuOpen] = useState(false)
    const [arrowOpen, setArrowOpen] = useState(false)
    const menuOpened = () => {
        setMenuOpen(!menuOpen)
    }

    const arrowOpened = () => {
        setArrowOpen(!arrowOpen)
        console.log("apertou")
    }
    return (
        <div className="nav-container">
            <ul className='mobile-menu-icon'>
                <li>
                    <IoMdMenu onClick={menuOpened} size={40} />
                </li>
            </ul>
            <div className={`container-menu ${menuOpen ? "menu-opened" : ""}`}>
                
                <ul className="menu-links flex">
                    <li className="links"><a href="#">HOME</a></li>
                    <li className="links"><a href="#">KNOW</a></li>
                    <li className="links"><a href="#">MENU</a></li>
                    <li className="links"><a href="#">BOOK AT TABLE</a></li>
                </ul>
                <ul className="logo">
                    <li>COFFEE BREATHING</li>
                </ul>
                <ul className="socials">
                    <li className='socials-icons'>
                        <a href="#" target='_blank'>
                            <FaYoutube color="000" size={40} />
                        </a>
                    </li>
                    <li className='socials-icons'>
                        <a href="#" target='_blank'>
                            <FaLinkedin size={30} color='000' />
                        </a>
                    </li>
                    <li className='socials-icons'>
                        <a href="#" target='_blank'>
                            <FaGithubSquare color='000' size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}