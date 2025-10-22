export const fetchTodos = () =>
  fetch('https://jsonplaceholder.typicode.com/todos').then((res) => {
    if (!res.ok) return res.error;
    return res.json();
  });
