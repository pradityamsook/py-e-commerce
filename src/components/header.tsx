import { Button, Tabs, TabsProps } from 'antd';
import { NavLink, useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { loggedState } from '../state/recoil_state';
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
    const isLogged: boolean = useRecoilValue(loggedState);
    const [logged, setLogged] = useRecoilState(loggedState);

    const navigate = useNavigate();

    const handleChange = (v: string) => {
        navigate(v);
    }
    console.log(logged)

    const operations = !isLogged ?
        <Button onClick={() => navigate('/login')}>Login</Button> :
        <Button onClick={() => setLogged(false)}>Logout</Button>;

    return (
        <>
            <Tabs tabBarExtraContent={operations} items={items}
                onChange={(v) => handleChange(v)}
            />
            <nav className="nav-link">
                <NavLink to="/" className="nav-link">Home</NavLink>
                <NavLink to="/products" className="nav-link">Products</NavLink>
                {isLogged ? <NavLink to="/dashboard" className="nav-link">Dashboard</NavLink> : <></>}
            </nav>
        </>
    );
};

export default AppHeader;
