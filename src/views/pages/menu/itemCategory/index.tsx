import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'

interface Data {
    id: number
    name: string
    icon: IconDefinition
    isActive: boolean
    onSelected: (id: number) => void
}
const ItemCategory = ({ id, name, icon, isActive, onSelected }: Data) => {
    return (
        <div
            className={`min-w-[80px] mr-4 rounded-md drop-shadow-md text-center p-2 ${
                isActive ? `bg-primary text-black` : `bg-black text-primary`
            }`}
            onClick={() => onSelected(id)}
            aria-hidden='true'
        >
            <FontAwesomeIcon className='text-4xl m-auto' icon={icon} />
            <h2>{name}</h2>
        </div>
    )
}

export default ItemCategory
