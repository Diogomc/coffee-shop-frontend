import '@/components/hero/hero.css'
import { Buttons } from '../buttons/Buttons'
export const Heros = () => {
    return (
        <div className="hero flex items-center">
            <div>
                <video className="video-banner" src="coffee.mp4" loop autoPlay muted title="italian cappuccino"></video>
                <img className='mobile-banner' src="banner.jpg" alt="banner" />
                <div className="title-hero">
                    <h1 className="hero-title text-6xl text-white">Coffee Breathing</h1>
                    <p className='sub-title text-3xl text-gray-100'>The best of coffee</p>
                    <div className='p-7'>
                        <Buttons
                            size='p-4'
                            content='Book Now'
                            link=''
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
