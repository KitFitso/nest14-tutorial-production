'use client';
import { useState } from 'react';

const Client = () => {
  const [count, setCount] = useState(0);

  const handleChange = (direction) => {
    if (direction === 'up') {
      setCount((prev) => (prev += 1));
    } else if (direction === 'down') {
      setCount((prev) => (prev -= 1));
    } else {
      console.log(`there was an error, value ${direction} is not handled`);
    }
  };

  return (
    <div>
      <div className="mb-5">{count}</div>
      <button
        onClick={() => handleChange('up')}
        className="btn btn-accent mr-5"
      >
        Increase
      </button>
      <button onClick={() => handleChange('down')} className="btn btn-accent">
        Decrease
      </button>
    </div>
  );
};

export default Client;
