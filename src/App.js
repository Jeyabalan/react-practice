import React from 'react';
import './style.css';
import { fetchTodos } from './api.js';
import MultiSelectBox from './MultiSelectBox.jsx';
import Timer from './timer.jsx';
import Flames from './flames.jsx';
import TrafficLight from './TrafficLight.js';
import TransferBox from './TransferBox/index.js';
import ReduxAddition from './redux/redux-app.js';

export default function App() {
  const [data, setData] = React.useState([]);
  const [query, setQuery] = React.useState('');
  const [selectedValues, setSelectedValues] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const result = await fetchTodos();
      setData(result);
    };
    fetchData();
  }, []);

  const onSelectedValues = (values) => {
    setSelectedValues(values);
  };

  const onClickHandler = () => {
    const throttledValue = useThrottle('test');
  };

  return (
    <div>
      {/* <h1>Custom Hook</h1>
      <MultiSelectBox data={data} onSelectedValues={onSelectedValues} />
      <Timer />
      <button onClick={onClickHandler}>Click</button>
      <div style={{ padding: 20 }}>
        <input
          type="text"
          placeholder="Type fast..."
          onChange={(e) => throttledSetQuery(e.target.value)}
        />
        <p>Query: {query}</p>
      </div>
      <TrafficLight />
      <TransferBox /> */}
      <ReduxAddition />
    </div>
  );
}
