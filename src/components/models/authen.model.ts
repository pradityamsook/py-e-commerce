import { atom, selector } from "recoil";
import { apiLogin, apiLogout } from "../../services/authen.service";

type user = {
    username?: string;
    password?: string;
}

export const authState: any = atom({
    key: "authState",
    default: null
})

export const isLogState = atom({
    key: "isLogState",
    default: null
})

export const isLoggedInSelector: any = selector({
    key: "isLoggedInSelector",
    get: ({ get }) => !!get(authState)
})

export const login: any = async (user?: user) => {
    const setUser = await apiLogin(user);
    authState.set(setUser);
    return setUser;
}

export const logout = async () => {
    await apiLogout();
    authState.set(null)
}