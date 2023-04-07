import { atom } from "recoil";
import ProductDetail from "../pages/product-detail.page";

export interface imageCard {
    author: string;
    url: string;
}

export type productDetail = {
    amount: string;
    image_url: string;
    product_id: number;
    name: string;
    price: number;
    sale_active: boolean;
}

export const imageCardState = atom({
    key: "imageCardState",
    default: [] as imageCard[]
});

export const productState = atom({
    key: "products",
    default: []
})

export const loggedState = atom({
    key: "login",
    default: false
})

export const productIDState = atom({
    key: "productId",
    default: 0
})

export const productListState = atom({
    key: "productList",
    default: []
})

export const productDetailState = atom({
    key: "productDetailState",
    default: {} as productDetail
})