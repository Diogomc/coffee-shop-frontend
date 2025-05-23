import { FaInstagram } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { BiSolidCoffee } from "react-icons/bi";
import { IoMdMenu } from "react-icons/io";
import '@/components/nav/nav.css'
import { useState } from "react";
import { IoMdCart } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
export const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const handleToggleMenu = () => {
        setMenuOpen(!menuOpen)
    }
    return (
        <nav>
            <div className="nav-menu flex justify-around items-center p-2">

                <div className="nav-btn flex justify-between">
                    <p className="btn-mobile-menu" onClick={handleToggleMenu}><IoMdMenu color="#fff" size={50} /></p>
                    <p><BiSolidCoffee size={50} color="#fff" /></p>
                </div>
                <div>
                    <ul className={`flex ${menuOpen ? 'menu-opened' : 'menu-closed'}`}>
                        <li className="item text-white text-lg p-2"><a href="#">Home</a></li>
                        <li className="item text-white text-lg p-2"><a href="#">Drinks</a></li>
                        <li className="item text-white text-lg p-2"><a href="#">Bakery</a></li>
                        <li className="item text-white text-lg p-2"><a href="#">Book now</a></li>
                    </ul>
                </div>
                <ul className="cart flex items-center">
                    <li><a href="#"><IoMdCart size={30} color="#fff"/></a></li>
                    <li><a href="#"><AiOutlineUser size={30} color="#fff"/></a></li>
                </ul>
            </div>
        </nav>
    )
}