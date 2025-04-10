import '@/components/footer/footer.css';
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaPix } from "react-icons/fa6";
import { FaCcPaypal } from "react-icons/fa";

export const Footer = () => {

const date = new Date();
const year = date.getFullYear();

return (
    <div className="footer-container flex items-center justify-between">
        <ul className="p-5">
            <li className='text-white'>{year} © All Right Reserved <a href="https://www.linkedin.com/in/diogo-marcondes/" target="_blank">Diogo</a></li>
        </ul>
        <ul className="flex p-5 items-center text-white">
            <li className="p-1">Secured Payments:</li>
            <li className="p-1"><FaCcMastercard size={40}/></li>
            <li className="p-1"><FaCcVisa size={40}/></li>
            <li className="p-1"><FaPix size={40}/></li>
            <li className="p-1"><FaCcPaypal size={40}/></li>
        </ul>
    </div>
)
}