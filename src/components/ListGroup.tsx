import { useState } from "react";
import Alert from "./Alert";
import Button from "./Button";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
      <h2>Alert</h2>
      <div>
        <Alert>
          Hello <span>World</span>
        </Alert>
      </div>

      <div>
        <Button color="danger" onClick={() => console.log('Clicked')}>
          My Button
        </Button>
      </div>
    </>
  );
}

export default ListGroup;
