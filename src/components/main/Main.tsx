import { products } from "@/type/products"
import { useEffect, useState } from "react"

export const Main = () => {

    const [product, setProduct] = useState<products[]>([]);

    const getProduct = async () => {
        const res = await fetch("https://localhost:7262/Product");
        const json = await res.json();

        setProduct(json)
    }
    useEffect(() => {
        getProduct();
    }, [])


    return (
        <div>
            {product.map(item => (
                <div key={item.productId}>
                    {item.productName}
                </div>
            ))}

        </div>
    )
}