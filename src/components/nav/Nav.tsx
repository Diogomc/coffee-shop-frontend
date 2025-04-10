import { FaInstagram } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { BiSolidCoffee } from "react-icons/bi";
import '@/components/nav/nav.css'
export const Nav = () => {
    return (
        <nav className="nav-menu flex justify-around items-center p-3">
            <p><BiSolidCoffee size={40} color="#fff"/></p>
            <ul className="flex justify-end items-center">
                <li className="p-2 text-white text-lg"><a className="hover:text-amber-300" href="#">Home</a></li>
                <li className="p-2 text-white text-lg"><a className="hover:text-amber-300" href="#">About</a></li>
                <li className="p-2 text-white text-lg"><a className="hover:text-amber-300" href="#">Menu</a></li>
                <li className="p-2 text-white text-lg"><a className="hover:text-amber-300" href="#">Book</a></li>
            </ul>
            <ul className="flex">
                <li><a href="#"><FaInstagram size={30} color="#fff"/></a></li>
                <li><a href="#"><FaSquareGithub size={30} color="#fff"/></a></li>
                <li><a href="#"><FaLinkedin size={30} color="#fff"/></a></li>
            </ul>
        </nav>
    )
}