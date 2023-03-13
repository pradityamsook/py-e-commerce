import { atom, selector } from "recoil";

export const authState: any = atom({
    key: "authState",
    default: null
})

export const isLoggedInSelector = selector({
    key: "isLoggedInSelector",
    get: ({ get }) => !!get(authState)
})

export const login: any = async ({username, password}: any) => {
    const user = await login({username, password});
    authState.set(user);
    return user;
}