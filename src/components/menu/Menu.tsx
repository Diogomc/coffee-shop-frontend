import '@/components/menu/menu.css'
import { products } from "@/type/products";
import { useEffect, useState } from "react"
import { json } from "stream/consumers";

export const Menu = () => {

const [menu, setMenu] = useState<products[]>([]);

const getMenu = async () => {
    const res = await fetch('https://localhost:7262/Product');
    const data = await res.json()
    setMenu(data)
}
useEffect(()=>{
    getMenu();
}, [])

    return (

        <div className="menu-container">
                <h1 className='coffees-title'>Coffees</h1>
            <div className="container-cards">
           {menu.map(item => (
                <div key={item.productId} className='cards'>
                    <img className='product-image' src={item.productImageUrl} alt={item.productName} title={item.productName} />
                    <div className="title-and-price">
                    <p className='product-name'>{item.productName}</p>
                    <p className='product-price'>{item.productPrice}/BRL</p>
                    </div>
                    <p className='product-description'>{item.productDescription}</p>
                    <div className="btn-order-area">
                    <button className='btn-order'>Order Now</button>
                    </div>
                </div>
           ))}
        </div>
        </div>
    )
}