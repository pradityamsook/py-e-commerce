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
            <EditProductComponent productId={parseInt(id)} />
        </>
    );
}

export default EditProductPage;