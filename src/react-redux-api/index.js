import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '../api';

export default function ReactReduxApi() {
  const dispatch = useDispatch();
  const { toDoList } = useSelector((state) => state.ToDoReducer);

  React.useEffect(() => {
    fetchTodos(dispatch);
  }, []);

  return (
    <>
      React Redux Api
      <table border={1}>
        <thead>
          <th>Id</th>
          <th>Title</th>
          <th>Completes</th>
        </thead>
        <tbody>
          {toDoList.map((list) => (
            <tr key={list.key}>
              <td>{list.id}</td>
              <td>{list.title}</td>
              <td>{list.completed ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
