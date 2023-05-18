import { useState } from "react";
import item from "./../assets/item.svg";
type ListItemType = {
  id: number;
  label: string;
  done: boolean;
};
const initialList: ListItemType[] = [
  {
    id: 0,
    label: "Nauci",
    done: false,
  },
  {
    id: 1,
    label: "Nauci",
    done: false,
  },
];
const Todo = () => {
  const [listItems, setListItems] = useState<ListItemType[]>(initialList);
const [inputValue, setInputValue] = useState<string>("");
  const handleAdd = () => {
    const newListItem = {
      id: listItems.length + 1,
      label: inputValue,
      done: false,
    };
    setListItems([...listItems, newListItem]);
    setInputValue("");
  }
  const deleteItem =(id:number)=>{
    const newList=listItems.filter((listItem)=>listItem.id !==id)
  setListItems(newList);
  };
   const handleCheck = (id: number) => {
     const newList = listItems.map((listItem) => {
       if (listItem.id === id) {
         return { ...listItem, done: true };
       }
       return listItem;
     });
     setListItems(newList);
   };

  return (
    <div className="container">
      <h1>My to do list</h1>
      <div className="todo">
        <input value={inputValue}
        onChange={(e)=>setInputValue (e.target.value)}
         type="text" placeholder="Add" />
        
        <button onClick={()=> handleAdd()} className="todo__btn">Click</button>
      </div>
      <div className="todo__item">
        
        {
          listItems.map((listItem:ListItemType)=>{
            return(
              <div className="todo__item" key={listItem.id}>
              {listItem.done ? "over": ""}
              <div onClick={()=>handleCheck(listItem.id)}>
                {listItem.label}

              </div>
              <div onClick={()=> deleteItem(listItem.id)}
              >
              <img className="todo__photo" src={item} alt="id" />

              </div>
              </div>
            )
          }
          )
        }
      </div>
    </div>
  );
};
export default Todo;
