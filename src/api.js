import { fetchTodosList } from "./react-redux-api/store/action";

export const fetchTodos = (dispatch) =>
  fetch('https://jsonplaceholder.typicode.com/todos').then(async (res) => {
    if (!res.ok) return res.error;
    const response = await res.json()
    dispatch(fetchTodosList(response))
    // return res.json();
  });
