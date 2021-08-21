import initialState from "./initialState";
import { TOGGLE_MENU } from "./type";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return { ...state, isSidebarSHow: !state.isSidebarSHow };
  }
};

export default reducer;
