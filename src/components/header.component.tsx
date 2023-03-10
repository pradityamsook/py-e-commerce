import { Button, Tabs, TabsProps } from 'antd';
import { useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { loggedState } from '../state/recoil_state';
import { useLocalStorage } from "usehooks-ts"
import "./styles/header.css"


const items: TabsProps['items'] = [
    {
        label: "Home",
        key: "/",
    },
    {
        label: "Products",
        key: "products",
    }
]

const AppHeader = () => {
    const [logged, setLogged] = useRecoilState(loggedState);
    const location = useLocation();
    // const isLogged = localStorage.getItem("isLogged");
    const navigate = useNavigate();
    const [isLogged, setIsLogged] = useLocalStorage("isLogged", "false");

    // useEffect(() => {
    //     if (!(isLogged && isLogged === "true")) {
    //         navigate("/home");
    //     }
    // }, [location.pathname])

    const handleChange = (v: string) => {
        navigate(v);
    }

    // const operations = !isLogged ?
    //     <Button onClick={() => navigate('/login')}>Login</Button> :
    //     <Button onClick={() => localStorage.setItem("isLogged", "false")}>Logout</Button>;



    if (!isLogged || isLogged === "false") {
        return (
            <>
                <Tabs tabBarExtraContent={<Button onClick={() => navigate('/login')}>Login</Button>} items={items}
                    onChange={(v) => handleChange(v)}
                />
                <nav className="nav-link">
                    <NavLink to="/" className="nav-link">Home</NavLink>
                    <NavLink to="/products" className="nav-link">Products</NavLink>
                </nav>
            </>
        );
    }

    return (
        <>
            <Tabs tabBarExtraContent={<Button onClick={() => setIsLogged("false")}>Logout</Button>} items={items}
                onChange={(v) => handleChange(v)}
            />
            <nav className="nav-link">
                <NavLink to="/" className="nav-link">Home</NavLink>
                <NavLink to="/products" className="nav-link">Products</NavLink>
                <NavLink to="/dashboard" className="nav-link">Dashboard</NavLink>
            </nav>
        </>
    );
};

export default AppHeader;
