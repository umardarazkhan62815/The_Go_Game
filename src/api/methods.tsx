// methods.tsx
import { getRequest, postRequest } from "./index";

export const Login = (payload) => postRequest(`/login`, payload);
export const SignUp = (payload: object) => postRequest(`/signup`, payload);
export const GetAllUser = () => getRequest(`/getAllUser`);
