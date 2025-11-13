import React from 'react';

export default function CheckBox({ item, selectedItem }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <input
        defaultChecked={false}
        type="checkbox"
        id={item.registrationId}
        onChange={(e) => selectedItem(e.target.checked ? item : undefined)}
      />
      <label>{`${item.name}-${item.marks}`}</label>
    </div>
  );
}
