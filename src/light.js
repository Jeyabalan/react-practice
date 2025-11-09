import React from 'react';

const style = {
  circle: {
    borderRadius: '50%',
    width: 75,
    height: 75,
    position: 'relative',
    marginBottom: 10,
  },
  container: {
    border: '2px solid #000',
    padding: 10,
    width: 85,
    backgroundColor: 'black'
  },
};

export default function Light({ color, count }) {
  const countArray = Array.from({ length: count });
  return (
    <div style={style.container}>
      {countArray.map((_, index) => (
        <div style={{ ...style.circle, backgroundColor: color[index] }}></div>
      ))}
    </div>
  );
}
