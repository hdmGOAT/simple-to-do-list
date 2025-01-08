export interface ItemProps {
  title: string;
  body: string;
}

const Item: React.FC<ItemProps> = ({ title, body }) => {
  return (
    <div className="aspect-square flex align-middle items-center justify-center bg-zinc-900 shadow-lg shadow-zinc-900 rounded-2xl flex-col p-5 space-y-5">
      <div className="flex flex-1 size-full bg-white rounded-2xl items-center justify-center">
        {title}
      </div>
      <div className="flex flex-[4] size-full bg-white rounded-2xl items-center justify-center">
        {body}
      </div>
    </div>
  );
};

export default Item;
