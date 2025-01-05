import React, { useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Index = () => {
  const [count, setCount] = useState(0); // Cart item count

  // Functions for increment and decrement
  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div className="p-4 flex flex-col items-center gap-4">
      {/* ADD Button with counter */}
      <div className="h-[52px] w-[112px] border border-[#318616] bg-[#f7fff9] rounded-[8px] font-sans flex justify-center items-center text-[#318616]">
        {count === 0 ? (
          // When count is 0, show "Add"
          <button onClick={increment} className="text-[#318616] font-bold">
            Add
          </button>
        ) : (
          // When count is greater than 0, show counter with + and - buttons
          <div className="flex items-center gap-2">
            <button
              onClick={decrement}
              className="h-[31px] w-[31px] border border-[#318616] bg-[#f7fff9] rounded-[6px] font-sans flex justify-center items-center text-[#318616]"
            >
              -
            </button>
            <span className="font-bold text-[#318616]">{count}</span>
            <button
              onClick={increment}
              className="h-[31px] w-[31px] border border-[#318616] bg-[#f7fff9] rounded-[6px] font-sans flex justify-center items-center text-[#318616]"
            >
              +
            </button>
          </div>
        )}
      </div>

      {/* My Cart Button */}
      <button
        className="flex justify-center items-center h-[52px] w-[112px] bg-[#0c831f] rounded-[8px] text-white font-bold text-[14px]"
      >
        <AiOutlineShoppingCart className="text-white text-2xl" />
        &nbsp; My Cart ({count})
      </button>
    </div>
  );
};

export default Index;
