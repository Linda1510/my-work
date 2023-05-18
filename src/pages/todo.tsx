import { useState } from "react";
import item from "./../assets/item.svg";

const Todo = () => {
  const [listItems, setListItem] = useState<[]>;

  return (
    <div className="container">
      <h1>My to do list</h1>
      <div className="todo">
        <input type="text" placeholder="Add" />
        <button className="todo__btn">Click</button>
      </div>
      <div className="todo__item">
        Add
        <img className="todo__photo" src={item} alt="id" />
      </div>
    </div>
  );
};
export default Todo;
