import type { FC } from "react"
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import EditProductComponent from "../components/edit-product";
import { productIDState } from "../state/recoil_state";

const EditProductPage: FC = (): any => {
    const productId: number = useRecoilValue(productIDState);

    return (
        <>
            {EditProductComponent(productId)}
        </>
    );
}

export default EditProductPage;