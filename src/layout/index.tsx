import { Outlet } from 'react-router-dom'
import Navigation from './navigation'

import logo from '../assets/images/logo.png'

const MainLayout = () => {
    return (
        <>
            <div className='h-screen'>
                <div style={{ height: 'calc(100vh - 100px)', backgroundColor: '#F0F0F0' }}>
                    <img className='m-auto pt-3' src={logo} alt='Cabeerna' width='100' />
                    <div className='p-3'>
                        <Outlet />
                    </div>
                </div>
                <Navigation />
            </div>
        </>
    )
}

export default MainLayout
