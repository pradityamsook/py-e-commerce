import { atom } from "recoil";

export interface imageCard {
    author: string;
    url: string;
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