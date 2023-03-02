import { Card, Row, Col } from 'antd';
import type { FC } from 'react';


const { Meta } = Card;

let cardList: any[] = [];
for (let i = 0; i < 20; i++) {
    cardList.push(
        <Col span={4} style={{
            marginTop: 20
        }}>
            <Card
                bordered={true}
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
                <Meta title="Europe Street beat" description="www.instagram.com" />
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