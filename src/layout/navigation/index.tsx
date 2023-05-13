import { NavLink } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faConciergeBell, faMusic, faBeer, faGift } from '@fortawesome/free-solid-svg-icons'

const Navigation = () => {
    return (
        <div className='grid grid-cols-4 gap-4 text-center py-5 px-3 bg-black text-white'>
            <NavLink
                className={({ isActive }) => (isActive ? 'grid text-primary' : 'grid')}
                to='menu'
            >
                <FontAwesomeIcon className='text-3xl m-auto' icon={faConciergeBell} />
                <span className='mt-1'>MENU</span>
            </NavLink>
            <NavLink
                className={({ isActive }) => (isActive ? 'grid text-primary' : 'grid')}
                to='musica'
            >
                <FontAwesomeIcon className='text-3xl m-auto' icon={faMusic} />
                <span className='mt-1'>MÚSICA</span>
            </NavLink>
            <NavLink
                className={({ isActive }) => (isActive ? 'grid text-primary' : 'grid')}
                to='cuenta'
            >
                <FontAwesomeIcon className='text-3xl m-auto' icon={faBeer} />
                <span className='mt-1'>CUENTA</span>
            </NavLink>
            <NavLink
                className={({ isActive }) => (isActive ? 'grid text-primary' : 'grid')}
                to='socios'
            >
                <FontAwesomeIcon className='text-3xl m-auto' icon={faGift} />
                <span className='mt-1'>SOCIOS</span>
            </NavLink>
        </div>
    )
}

export default Navigation
