import React from 'react';

export default function MyInput({ onChangeHandler }) {
  return (
    <input
      type="text"
      onChange={onChangeHandler}
      placeholder="Search..."
      style={{ width: 200, height: 25 }}
    />
  );
}
