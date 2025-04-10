import '@/components/main/main.css'
import { products } from '@/data/products'
import { ProductsCard } from '../products-card/ProductsCard'
import { useState } from 'react'
import { Buttons } from '../buttons/Buttons'
export const Main = () => {

    const [image, setImage] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [count, setCount] = useState(0)
    
    const handleSetImage = (id: number) => {
        const selectedImage = products.find(item => item.id === id)
        if (selectedImage) {
            setImage(selectedImage.imageUrl)
            setTitle(selectedImage.name)
            setDescription(selectedImage.description)
        }
    }
    const addCount = () => {
        setCount(count + 1)
    }
    const removeCount = () => {
        setCount(count - 1)
        if (count <= 0) {
            setCount(0)
        }
    }

    return (
        <section className='main-first-section'>

            <div className='little-card'>
                {products.map(item => (
                    <ProductsCard
                        key={item.id}
                        imageUrl={item.imageUrl}
                        onClick={() => handleSetImage(item.id)}
                    />
                ))}

            </div>
            {image && title && (

                <div className='products-selected'>
                    <img className='image-selected' src={image} />

                    <div className='description-area'>
                        <h1 className='text-white text-5xl'>{title}</h1>
                        <p className='text-white p-12 '>{description}</p>



                        <div className='shop-area'>
                            <div className="btn-count">
                                <button className='btn-shop rounded-l-2xl' onClick={removeCount}>-</button>
                                <p className='btn-shop'>{count}</p>
                                <button className='btn-shop rounded-r-2xl' onClick={addCount}>+</button>
                            </div>
                            <div className="addToCart">
                                <Buttons
                                    content='Add To Cart'
                                    link='#'
                                />
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </section>
    )
}