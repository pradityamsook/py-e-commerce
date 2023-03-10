import { Breadcrumb, Button, Layout, Menu, MenuProps, Tabs, TabsProps, theme } from 'antd';
import { useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { loggedState } from '../state/recoil_state';
import { useLocalStorage } from "usehooks-ts"
import "./styles/header.css"
import { Content, Footer, Header } from 'antd/es/layout/layout';




const AppHeader = () => {
    const [logged, setLogged] = useRecoilState(loggedState);
    const location = useLocation();
    const navigate = useNavigate();
    const [isLogged, setIsLogged] = useLocalStorage("isLogged", "false");

    let items: MenuProps['items'] = [
        {
            label: "Home",
            key: "/",
        },
        {
            label: "Products",
            key: "/products",
        }
    ]

    let itemsTabs: TabsProps['items'] = [
        {
            label: "Home",
            key: "/",
        },
        {
            label: "Products",
            key: "products",
        }
    ]

    // useEffect(() => {
    //     if (!(isLogged && isLogged === "true")) {
    //         navigate("/home");
    //     }
    // }, [location.pathname])

    const handleChange = (v: string) => {
        console.log(v);
        navigate(v);
    }

    // const operations = !isLogged ?
    //     <Button onClick={() => navigate('/login')}>Login</Button> :
    //     <Button onClick={() => localStorage.setItem("isLogged", "false")}>Logout</Button>;

    const {
        token: { colorBgContainer },
      } = theme.useToken();

    if (!isLogged || isLogged === "false") {
        return (
            <>
                <Tabs tabBarExtraContent={<Button onClick={() => navigate('/login')}>Login</Button>} items={itemsTabs}
                    onChange={(v) => handleChange(v)}
                />
                <nav className="nav-link">
                    <NavLink to="/" className="nav-link">Home</NavLink>
                    <NavLink to="/products" className="nav-link">Products</NavLink>
                </nav>
            </>
        );
    }
    items.push({
        label: "Dashboard",
        key: "/dashboard"
    })

    return (
        <>
             <Tabs tabBarExtraContent={<Button onClick={() => setIsLogged("false")}>Logout</Button>} items={itemsTabs}
                onChange={(v) => handleChange(v)}/> 
            <nav className="nav-link">
                <NavLink to="/" className="nav-link">Home</NavLink>
                <NavLink to="/products" className="nav-link">Products</NavLink>
                <NavLink to="/dashboard" className="nav-link">Dashboard</NavLink>
            </nav>

            <Layout className="layout">
                <Header style={{ top: 5, zIndex: 5, width: '100%' }}>
                    <div
                        style={{
                            float: 'left',
                            width: 50,
                            height: 50,
                            margin: '10px 0px 0 0',
                            // background: 'rgba(255, 255, 255, 0.2)',
                        }}
                        onClick={() => navigate("/")}
                    >
                        <img src="/world_wide_virus_icon_140485.ico" alt="Word Wide Will" style={{width: 40, height: 40}}/>
                    </div>
                    
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        onClick={(v) => handleChange(v.key)}
                        items={items}
                    />
                </Header>
                <Content style={{ padding: '0 50px' }}>

                </Content>
                {/* <Footer style={{ textAlign: 'center' }}></Footer> */}
                
            </Layout>
        </>
    );
};

export default AppHeader;
