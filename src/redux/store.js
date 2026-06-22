import { createStore } from "redux";

const reducer = (state = 0, action) => {
  //   swtich(action.type) {
  //     case "INCREMENT":
  //         return state + 1;
  //     case "DECREMENT:
  //         return state - 1;
  //     default:
  //         return state;
  //   }
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

export const store = createStore(reducer);
