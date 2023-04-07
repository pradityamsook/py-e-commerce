import { Row, Col } from "antd";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { fetchProductById } from "../services/product.service";
import { productDetail, productDetailState, productState } from "../state/recoil_state";

import "./styles/product-detail.css"

const ProductDetail: FC = () => {
    const { index }: any = useParams();
    // let products: any = useRecoilValue(productState);
    const [detailProducts, setDetailProducts] = useRecoilState(productDetailState);
    const getIndex = parseInt(index);
    // console.log(getIndex)

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        await fetchProductById(getIndex)
        .then((res) => {
            setDetailProducts(res[0]);
        })
        .catch(error => console.error(error));
    }

    if ( !detailProducts) {
        return <></>
    }

    return (
        <div>
            <Row>
                <Col span={12} offset={6} className={"image-center"}>
                    <img src={`${process.env.REACT_APP_IMAGE}${detailProducts.image_url}`} className={"img-detail"}></img>
                    <div>{detailProducts.name}</div>
                    <div>Amount: {detailProducts.amount}</div>
                </Col>
            </Row>
        </div>
    )
}

export default ProductDetail;