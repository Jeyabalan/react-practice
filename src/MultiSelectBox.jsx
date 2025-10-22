import React from 'react';
import MyInput from './MyInput.tsx';
import { useDebounce } from './debounce.js';

export default function MultiSelectBox({ data, onSelectedValues }) {
  const [searchText, setSearchText] = React.useState('');
  const [filteredData, setFilteredData] = React.useState([]);

  const debouncedValue = useDebounce(searchText, 1000);

  React.useEffect(() => {
    if (debouncedValue?.length > 0) {
      const result = data.filter((item) =>
        item?.title?.includes(debouncedValue)
      );
      setFilteredData([...result]);
    } else setFilteredData(data);
  }, [debouncedValue]);

  React.useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const onChangeHandler = (e) => setSearchText(e.target.value);

  const onClickHandler = (item) => {
    onSelectedValues(item);
  };

  return (
    <>
      <MyInput onChangeHandler={onChangeHandler} />
      {debouncedValue?.length > 0 ? (
        <div>
          {filteredData.map((item) => (
            <div
              key={item.id}
              style={{ border: '1px solid', padding: 5, cursor: 'pointer' }}
            >
              <span onClick={() => onClickHandler(item)}>{item.title}</span>
            </div>
          ))}
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
