import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount((p) => p + 1);
  };

  return (
    <div style={{backgroundColor : "teal" , padding:'10px'}}>
      <h3> Count: {count} </h3>
      <button onClick={handleCount}> Add Count </button>
    </div>
  );
};

export default Counter;
