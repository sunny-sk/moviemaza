import { LOGIN, LOGOUT, REGISTER } from '@/constants/auth';

// LOGIN
export const loginAction = (payLoad) => ({ type: LOGIN, payLoad });

// LOGOUT
export const logoutAction = () => ({ type: LOGOUT });

// REGISTER
export const registerAction = (payLoad) => ({ type: REGISTER, payLoad });
