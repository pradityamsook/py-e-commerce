import mainAPI from './main.service';

const API = process.env.REACT_APP_APISERVER;

type user = {
    username?: string;
    password?: string;
}

export const login: any = async ( user?: user) => {
    mainAPI.post(API + "authenticate/login", user)
    .then((res: any) => {
        if (res.ok && res) {
            const data = res.json();
            localStorage.setItem("authToken", data.token)
            return data.result;
        } 
    })
    .catch((error) =>{ 
        throw new Error(error.message) 
    })
}

export const logout = async () => {
    mainAPI.post(API + "authenticate/logout")
    .then(res => localStorage.removeItem("authToken"))
    .catch((error) => {
        throw new Error(error.message)
    })
}