import { Row, Col } from "antd";
import type { FC } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { productState } from "../state/recoil_state";

import "./styles/product-detail.css"

const ProductDetail: FC = () => {
    const { productName, index }: any = useParams();
    const products: any = useRecoilValue(productState)
    const getIndex = parseInt(index)
    return (
        <div>
            <Row>
                <Col span={12} offset={6} className={"image-center"}>
                    <img src={`https://joesch.moe/api/v1/${productName}`} className={"img-detail"}></img>
                    <div>{products[getIndex].name}</div>
                    <div>Amount: {products[getIndex].amount}</div>
                </Col>
            </Row>
        </div>
    )
}

export default ProductDetail;