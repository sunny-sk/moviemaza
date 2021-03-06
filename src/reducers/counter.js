import { DECREMENT, INCREMENT, RESET } from '@/constants/counter';
// COUNTER REDUCER
const counterReducer = (state = 0, { type }) => {
  switch (type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case RESET:
      return 0;
    default:
      return state;
  }
};

export default counterReducer;
