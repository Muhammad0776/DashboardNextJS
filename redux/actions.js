import { getTodos } from "../api";
import { TOGGLE_MENU, SET_TODOS } from "./type";

export const toggleMenu = (dispatch) => {
  dispatch({ type: TOGGLE_MENU });
};

export const setTodos = async (dispatch) => {
  const data = await getTodos();

  console.log(data);

  dispatch({ type: SET_TODOS, payload: data });
};
