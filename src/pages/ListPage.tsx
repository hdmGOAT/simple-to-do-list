import React from "react";
import Item from "@/components/item";

const ListPage = () => {
  return (
    <div className="m-2">
      <div className="space-y-3">
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
      </div>
    </div>
  );
};

export default ListPage;
