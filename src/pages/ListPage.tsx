import Item, { ItemProps } from "@/components/Item";
import { supabase } from "@/createClient";
import { useEffect, useState } from "react";

const testArray: ItemProps[] = [
  { title: "what", body: "test" },
  { title: "tst", body: "safd" },
];

const ListPage = () => {
  const [listItems, setListItems] = useState<ItemProps[]>();

  useEffect(() => {
    const fetchData = async () => {
      const { data: todo, error: todoerror } = await supabase
        .from("todo")
        .select("*");

      if (todoerror) {
        console.error("error fetching todo list");
      } else {
        const mappedItems: ItemProps[] = todo.map((item) => ({
          title: item.title,
          body: item.body,
        }));
        setListItems(mappedItems);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="m-2">
      <div className="space-y-3">
        {listItems?.map((item, index) => (
          <Item body={item.body} title={item.title} />
        ))}
      </div>
    </div>
  );
};

export default ListPage;
