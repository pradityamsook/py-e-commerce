import { atom, selector } from "recoil";


export interface imageCard {
    author: string;
    url: string;
}

export const imageCardState = atom({
    key: "imageCardState",
    default: [] as imageCard[]
});