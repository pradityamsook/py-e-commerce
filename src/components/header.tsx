import { Button, Tabs, TabsProps } from 'antd';
import { NavLink, useNavigate } from 'react-router-dom';
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

    const navigate = useNavigate();

    const handleChange = (v: string) => {
        navigate(v);
    }

    const operations = <Button onClick={() => navigate('/login')}>Login</Button>;

    return (
        <>
            <Tabs tabBarExtraContent={operations} items={items}
                onChange={(v) => handleChange(v)}
            />
            <nav className="nav-link">
                <NavLink to="/" className="nav-link">Home</NavLink>
                <NavLink to="/products" className="nav-link">Products</NavLink>
            </nav>
        </>
    );
};

export default AppHeader;
