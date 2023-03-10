import type { FC } from "react"
import { useParams } from "react-router-dom";
import CreateProductComponent from "../components/create-product.component";

const CreateProductPage: FC = (): any => {
    
    return (
        <>
            <CreateProductComponent />
        </>
    );
}

export default CreateProductPage;