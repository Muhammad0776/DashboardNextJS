import initialState from "./initialState";
import { SET_TODOS, TOGGLE_MENU } from "./type";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return { ...state, isSidebarShow: !state.isSidebarShow };

    case SET_TODOS:
      return { ...state, todos: action.payload };

    default:
      return state;
  }
};

export default reducer;
