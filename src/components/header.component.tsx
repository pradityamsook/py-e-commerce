import { Breadcrumb, Button, Col, Layout, Menu, MenuProps, Row, Tabs, TabsProps, theme } from 'antd';
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
    ];

    // useEffect(() => {
    //     if (!(isLogged && isLogged === "true")) {
    //         navigate("/home");
    //     }
    // }, [location.pathname])

    const handleChange = (v: string) => {
        navigate(v);
    }

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const logClick = () => {
        if (!isLogged || isLogged === "false") {
           return (
                <Button onClick={() => navigate('/login')}
                    className={"logged-layout"}
                >
                    Login
                </Button>
           );
        }

        items?.push({
            label: "Dashboard",
            key: "/dashboard"
        })

        return (
            <Button onClick={() => setIsLogged("false")}
                className={"logged-layout"}
            >
                Logout
            </Button>
        )
    } 

    return (
        <>
            <Layout className="layout">
                <Header style={{ top: 5, zIndex: 5, width: '100%' }}>
                    <Row gutter={12}>
                        <Col span={18}>
                            <div
                                style={{
                                    float: 'left',
                                    width: 50,
                                    height: 50,
                                    margin: '10px 0px 0 0',
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
                        </Col>
                        <Col span={6}>
                            {logClick()}
                        </Col>
                    </Row>   
                </Header>
                {/* <Footer style={{ textAlign: 'center' }}></Footer> */}
                
            </Layout>
        </>
    );
};

export default AppHeader;
