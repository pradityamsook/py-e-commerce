import { Content } from "antd/es/layout/layout";
import type { FC } from "react"
import { useParams } from "react-router-dom";
import CreateProductComponent from "../components/create-product.component";

const CreateProductPage: FC = (): any => {
    
    return (
        <>
            <Content style={{ padding: "2rem 0 0 1rem", marginBottom: "2rem"}}>
                <CreateProductComponent />
            </Content>
            
        </>
    );
}

export default CreateProductPage;