import { atom } from "recoil";

export interface imageCard {
    author: string;
    url: string;
}

export const imageCardState = atom({
    key: "imageCardState",
    default: [] as imageCard[]
});

export const tabs = atom({
    key: "tabs",
    default: ''
})