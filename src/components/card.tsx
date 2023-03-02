import { Card, Row, Col } from 'antd';
import type { FC } from 'react';
import { imageCard } from '../API/image'

import './styles/card.css';


const { Meta } = Card;
// let image = "https://joesch.moe/api/v1/random";
// let images: image[] = imageCard("https://picsum.photos/v2/list");
// console.log(images[0])
// let getImage = imageCard("https://picsum.photos/v2/list");
let cardList: any[] = [];
for (let i = 0; i < 20; i++) {
    cardList.push(
        <Col span={4} style={{
            marginTop: 20
        }}>
            <Card
                bordered={true}
                hoverable
                style={{ width: 300 }}
                cover={<img alt="example" src="https://joesch.moe/api/v1/random" style={{ width: 300, height: 400 }} />}
            >
                <Meta title="Europe Street beat" description="www.instagram.com" />
                <div style={{ marginBottom: 8 }} />
                <h2 className='info'>
                    เสื้อยืด AIRism คอตตอน คอกลม แขน 1/2 ทรงหลวม ลายทาง Uniqlo U
                </h2>
                <div className='product-price-info'>
                    <span className='price-currency'>
                        <span>THB 500.00</span>
                    </span>
                </div>
            </Card>
        </Col>
    );
}
const CardProducts: FC = () => (
    <Row gutter={16}>
        {cardList}
    </Row>
);

export default CardProducts;