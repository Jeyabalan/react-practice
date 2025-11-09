import React from 'react';
import MoveButton from './button';
import Box from './Box';

export default function TransferBox() {
  const itemList = [
    { name: 'ABC', marks: '98%', registrationId: '1234', box: 'A' },
    { name: 'DEF', marks: '87%', registrationId: '5678', box: 'A' },
    { name: 'GHI', marks: '91%', registrationId: '9101', box: 'A' },
  ];

  const [items, setItems] = React.useState(itemList);
  const [selectedItemList, setSelectedItemList] = React.useState([]);

  const onMoveItems = (direction) => {
    const modifiedItems = selectedItemList.map((item) => {
      item.box = direction;
      return item;
    });
    setItems([...items, modifiedItems]);
    setSelectedItemList([]);
  };
  const selectedItem = (itemSelected) => {
    setSelectedItemList([...selectedItemList, itemSelected]);
  };

  return (
    <div
      style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
    >
      <Box
        items={items.filter((item) => item.box === 'A')}
        selectedItem={selectedItem}
      />
      <div style={{ display: 'flex', flexDirection: 'column', padding: 10 }}>
        <MoveButton direction={'A'} onClickHandler={() => onMoveItems('A')} />
        <MoveButton direction={'B'} onClickHandler={() => onMoveItems('B')} />
      </div>
      <Box
        items={items.filter((item) => item.box === 'B')}
        selectedItem={selectedItem}
      />
    </div>
  );
}
