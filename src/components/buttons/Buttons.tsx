import '@/components/buttons/buttons.css'

type props = {
    content: string;
    link:string
}

export const Buttons = ({ content, link }: props) => {
    return (
        <button className="buttons p-4 rounded-md text-white"><a href={link}>{content}</a></button>
    )
}