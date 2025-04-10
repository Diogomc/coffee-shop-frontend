type props = {
    id?:number
    name?: string;
    imageUrl: string;
    description?: string;
    onClick?: () => void;
}

export const ProductsCard = ({name, imageUrl, description, onClick }: props) => {
    return (
        <div onClick={onClick} className="">
            <img className="w-50 rounded-full p-2 cursor-pointer" src={imageUrl}/>
        </div>
    )
}