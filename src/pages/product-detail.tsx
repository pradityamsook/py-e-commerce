import { Row, Col } from "antd";
import type { FC } from "react";
import { useParams } from "react-router-dom";

import "./styles/product-detail.css"

const ProductDetail: FC = () => {
    const productName = useParams;

    return (
        <div>
            <Row>
                <Col span={12} offset={6} className={"image-center"}>
                    <img src={`https://joesch.moe/api/v1/${productName}`} className={"img-detail"}></img>
                </Col>
            </Row>
        </div>
    )
}

export default ProductDetail;