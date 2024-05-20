import axios from "axios";
import { Login } from "./Login";



export const loginUser = async (userData: Login) => {
    const response = await axios.post(`http://16.170.99.206/api/v1/en/login/`, userData);

    if (response.data) {
        localStorage.setItem("access", JSON.stringify(response.data.access));
        sessionStorage.setItem("refresh", JSON.stringify(response.data.refresh));
    }

    return response.data;
};
