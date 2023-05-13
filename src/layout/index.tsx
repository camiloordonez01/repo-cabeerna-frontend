import { Outlet } from 'react-router-dom'
import Navigation from './navigation'

import logo from '../assets/images/logo.png'

const MainLayout = () => {
    return (
        <div className='h-screen'>
            <div style={{ height: 'calc(100vh - 100px)' }}>
                <img className='m-auto py-3' src={logo} alt='Cabeerna' width='150' />
                <div className='p-3'>
                    <Outlet />
                </div>
            </div>
            <Navigation />
        </div>
    )
}

export default MainLayout
