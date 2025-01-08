import Item, { ItemProps } from "@/components/Item";

const testArray: ItemProps[] = [
  { title: "what", body: "test" },
  { title: "tst", body: "safd" },
];

const ListPage = () => {
  return (
    <div className="m-2">
      <div className="space-y-3">
        {testArray.map((item, index) => (
          <Item body={item.body} title={item.title} />
        ))}
      </div>
    </div>
  );
};

export default ListPage;

/*
D1C6AD
BBADA0
A1869E
797596
0B1D51
*/
