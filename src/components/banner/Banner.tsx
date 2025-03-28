import '@/components/banner/banner.css';
import Typewriter from 'react-ts-typewriter';

export const Banner = () =>{
    return (
        <div className='banner-container'>
            <div className="banner">
                <img className='banner-image' src="banner.jpg" alt="banner" />
            </div>
            <div className="title-banner">
                <h1 className='text-7xl'><Typewriter text={"Welcome..."} loop speed={400} /></h1>
                <p className='sub-title-banner'>The most traditional coffees</p>
                <button className='btn-book-banner'><a href="#">Make a Book</a></button>
            </div>
            
        </div>
    )
}