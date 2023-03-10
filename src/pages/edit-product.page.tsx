import { Content } from "antd/es/layout/layout";
import type { FC } from "react"
import { useParams } from "react-router-dom";
import EditProductComponent from "../components/edit-product.component";

const EditProductPage: FC = (): any => {
    const { id } = useParams();

    if (!id) {
        return null;
    }

    return (
        <>
            <Content style={{ padding: "2rem 0 0 1rem", marginBottom: "2rem"}}>
                <EditProductComponent productId={parseInt(id)} />
            </Content>
        </>
    );
}

export default EditProductPage;