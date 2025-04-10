import Typewriter from "react-ts-typewriter"
import { Buttons } from "../buttons/Buttons"
import '@/components/hero/hero.css'
export const Heros = () => {
    return (
        <div className="hero flex items-center">
            <div className="left-hero w-full h-200 flex flex-col justify-center">
                <h1 className="text-white text-7xl pl-10">It's a</h1>
                <h1 className="text-white text-7xl pl-10">Coffee time<Typewriter text="..." loop speed={400} /></h1>
                <p className="hero-text-description pl-10 pt-5">
                    The Coffee Breathing offers a unique experience with specialty coffees and a traditional British breakfast. In a cozy atmosphere, customers can enjoy everything from a strong espresso to a full meal with eggs, bacon, sausages and more. A perfect place for those seeking flavor and tradition.
                </p>
                <p className="w-max p-10">
                    <Buttons
                        content="Book now"
                        link="#"
                    />
                </p>
            </div>
            <div className="right-hero bg-amber-950 w-full h-200">
                <img className="w-full h-full object-cover" src="breathing.png" alt="" />
            </div>
        </div>
    )
}
