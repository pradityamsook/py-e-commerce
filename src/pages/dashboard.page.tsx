import { Card, Row, Col, Divider, Button } from 'antd';
import { FC } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { NavLink, useNavigate } from 'react-router-dom';

import '../components/styles/card.css';
import { loggedState, productIDState } from '../state/recoil_state';

const imageName = ['jocelyn', 'jaqueline', 'jed', 'jabala', 'jacques', 'jack', 'jeri', 'josh', 'josephine', 'jake', 'jana', 'jenni', 'jolee', 'jai', 'jess', 'joe', 'jeane', 'jon', 'jazebelle', 'jean', 'jane', 'jodi', 'james', 'jordan', 'jerry', 'julie', 'jude', 'jia']
const { Meta } = Card;

const DashboardPage: FC = (): any => {
    const logged: boolean = useRecoilValue(loggedState);
    const [productId, setProductId] = useRecoilState(productIDState);
    const navigate = useNavigate();
    // const [products, setProducts] = useRecoilState(productState);
    // const products: any = useRecoilValue(productState);
    // console.log(products);

    // useEffect(() => {
    //     fetchData();
    // }, []);

    // const fetchData = async () => {
    //     try {
    //         const result = await fetchProduct();
    //         setProducts(result);
    //     } catch (e: any) {
    //         console.error(e)
    //     }

    // }

    const onClickProduct = (productId: number) => {
        setProductId(productId);
        navigate("/dashboard/edit_product");
    }

    if (logged) {
        return (
            <div className='div-res-product-card'>
                <Divider orientation="left" style={{ textAlign: "left" }}>Product list</Divider>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{ marginTop: "2rem" }}>
                    <Col style={{ textAlign: "center", paddingLeft: "1rem" }} span={12}>
                        <div>Product name</div>
                    </Col>
                    <Col className="gutter-row" span={3}>
                        <div>price</div>
                    </Col>
                    <Col className="gutter-row" span={3}>
                        <div>amount</div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <Button onClick={() => onClickProduct(12345)}>Edit</Button>
                        {/* <Button>Edit<NavLink to="/dashboard/edit_product" /></Button> */}
                        <span style={{ margin: "0.5rem" }}></span>
                        <Button>delete</Button>
                    </Col>
                </Row>
            </div >
        );
    } else {
        navigate("/error");
    }

}

export default DashboardPage;