import React from 'react';

export default function MoveButton({ direction, onClickHandler }) {
  return (
    <button onClick={() => onClickHandler(direction)}>
      {direction === 'A' ? '<-- Move Box A' : 'Move Box B -->'}
    </button>
  );
}
