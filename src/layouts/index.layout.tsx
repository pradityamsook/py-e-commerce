import { Outlet } from "react-router-dom"
import AppHeader from "../components/header"

const MainLayout = () => {
    return (
        <>
            <AppHeader />
            <Outlet />
        </>
    )
}

export default MainLayout
