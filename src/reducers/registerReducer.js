import * as actionTypes from "src/actions";

let initialState = {
  registeredSuccessfully: false,
  userInformation: {},
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REGISTER:
      console.log("action.payload", action.payload);
      state = action.payload;
      localStorage.setItem("register", JSON.stringify(action.payload));
      return state;

    case actionTypes.REGISTER_CLEANUP:
      state = initialState;
      localStorage.removeItem("register");
      return state;

    default:
      return state;
  }
};

export default registerReducer;
