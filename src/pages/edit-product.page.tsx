import type { FC } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import EditProductComponent from "../components/edit-product";
import { productIDState } from "../state/recoil_state";

const EditProductPage: FC = (): any => {
    // const productId: number = useRecoilValue(productIDState);
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