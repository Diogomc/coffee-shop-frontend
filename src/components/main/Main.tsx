'use client'
import '@/components/main/main.css'
import { products } from '@/data/products'
import { ProductsCard } from '../products-card/ProductsCard'
import { useEffect, useState } from 'react'
import { Buttons } from '../buttons/Buttons';
import { Location } from '../location/Location'
export const Main = () => {
    const [image, setImage] = useState(products[0].imageUrl)
    const [title, setTitle] = useState(products[0].name)
    const [description, setDescription] = useState(products[0].description)

    useEffect(() => {
        const testWindow = window;
    }, [])

    const handleSetImage = (id: number) => {
        const selectedImage = products.find(item => item.id === id)
        if (selectedImage) {
            setImage(selectedImage.imageUrl)
            setTitle(selectedImage.name)
            setDescription(selectedImage.description)
        }
    }

    return (
        <div>
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
                            <h1 className='text-description text-5xl text-gray-600'>{title}</h1>
                            <p className='text-description p-12 text-gray-600'>{description}</p>
                        </div>
                    </div>
                )}
            </section>
            <section>
                <h2 className='text-center p-5 text-5xl mb-7 text-gray-600'>Our Space</h2>
                <div>
                    <ul className='our-space-photos'>
                        <li><img src="coffeeshop.jpeg" alt="" /></li>
                        <li><img src="coffeeshopplace.jpg" alt="" /></li>
                        <li><img src="drinks.jpg" alt="" /></li>
                    </ul>
                </div>
            </section>
            <section className='w-full'>
                <h2 className='p-5 text-5xl text-center text-gray-600 m-10'>Find Us</h2>
                <div className='container-location flex justify-center items-center w-full'>
                    <Location />
                    <div className='location-area pl-30'>
                        <h3 className='text-3xl p-2 text-gray-600'>Our Location</h3>
                        <p className='text-location w-200 p-2 text-gray-600'>Coffee Breathing is conveniently located right next to the iconic Big Ben, offering a perfect spot to relax and enjoy your coffee while admiring one of London's most famous landmarks.</p>
                        <p className='p-2'>
                            <Buttons
                                content='Street view'
                                size='p-3'
                                link='https://www.google.com/maps/@51.5010126,-0.1245065,3a,75y,195.06h,124.13t/data=!3m7!1e1!3m5!1sa9YmJcZFqkGNZtBb9OhaUg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-34.126680913103826%26panoid%3Da9YmJcZFqkGNZtBb9OhaUg%26yaw%3D195.06306019040233!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D'
                                target='_blank'
                            />
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}