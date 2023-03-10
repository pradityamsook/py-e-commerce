import { Outlet } from "react-router-dom"
import AppHeader from "../components/header.component"

const MainLayout = () => {
    return (
        <>
            <AppHeader />
            <Outlet />
        </>
    )
}

export default MainLayout
