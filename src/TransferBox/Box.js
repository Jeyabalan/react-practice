import React from 'react';
import CheckBox from './CheckBox';

const style = {
  display: 'flex',
  flexDirection: 'column',
  width: 100,
  height: 100,
  border: '1px solid #000',
  padding: 10,
};

export default function Box({ items = [], selectedItem }) {
  return (
    <div style={style}>
      {items.map((item) => (
        <CheckBox
          key={item.registrationId}
          item={item}
          selectedItem={selectedItem}
        />
      ))}
    </div>
  );
}
