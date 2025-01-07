import React from "react";

const Item = () => {
  return (
    <div className="aspect-square flex align-middle items-center justify-center bg-deepBlue rounded-2xl flex-col p-5 space-y-5">
      <div className="flex flex-1 size-full bg-grayBlue rounded-2xl items-center justify-center">
        top
      </div>
      <div className="flex flex-[4] size-full bg-grayBlue rounded-2xl items-center justify-center">
        {" "}
        bot
      </div>
    </div>
  );
};

export default Item;
