import '@/components/buttons/buttons.css'

type props = {
    content: string;
    link:string
    size?:string
}

export const Buttons = ({ content, link, size }: props) => {
    return (
        <button className={`buttons ${size} rounded-md text-white text-1xl`}><a href={link}>{content}</a></button>
    )
}