import { SET_SHOW_SIDEBAR } from "./actions";

const initialState = {
  showSidebar: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SHOW_SIDEBAR:
      return { ...state, showSidebar: action.payload };
    default:
      return state;
  }
};

export default reducer;
