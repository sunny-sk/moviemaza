import { LOGIN, LOGOUT, REGISTER } from '@/constants/auth';
// AUTH REDUCER
const authReducer = (
  state = {
    isLoggedIn: false,
    user: null,
  },
  { type, payLoad }
) => {
  switch (type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        user: payLoad,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: false,
      };
    case REGISTER:
      return {
        ...state,
        isLoggedIn: true,
        user: payLoad,
      };
    default:
      return state;
  }
};

export default authReducer;
