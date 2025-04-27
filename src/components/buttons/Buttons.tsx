import '@/components/buttons/buttons.css'

type props = {
    content: string;
    link:string
    size?:string
    target?:string
}

export const Buttons = ({ content, link, size, target }: props) => {
    return (
        <button className={`buttons ${size} rounded-md text-white text-1xl`}><a href={link} target={target}>{content}</a></button>
    )
}