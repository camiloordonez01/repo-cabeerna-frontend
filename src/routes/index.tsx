import { useRoutes, RouteObject } from 'react-router-dom'

import { MenuPage, MusicPage, AccountPage, PartnerPage } from '../views/pages'

import Layout from '../layout'

const routes: RouteObject = {
    path: '/',
    element: <Layout />,
    children: [
        {
            path: '/menu',
            element: <MenuPage />,
        },
        {
            path: '/musica',
            element: <MusicPage />,
        },
        {
            path: '/cuenta',
            element: <AccountPage />,
        },
        {
            path: '/socios',
            element: <PartnerPage />,
        },
    ],
}

const MainRoutes = () => {
    return useRoutes([routes])
}

export default MainRoutes
