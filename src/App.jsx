import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import {useState} from "react";
import "./App.css";

function App() {
  // const intToDoItems = [
  //   {
  //     name: "Buy Milk",
  //     dueDate: "4/10/2023",
  //   },
   
  // ];

  const [toDoItem, setToDoItem] = useState([]);

  const handleAddNewItem = (itemName, itemDueDate) =>{
    const newItem = {
      name: itemName,
      dueDate: itemDueDate,
    };
    setToDoItem([...toDoItem, newItem]);

   
  }

  const handleDeletItem = (toDoItemName) =>{
    const newItems = toDoItem.filter((item) => item.name !== toDoItemName);
    setToDoItem(newItems);
  }

  return (
    <center className="custom-container">
      <AppName />
      <AddTodo addNewItem={handleAddNewItem} />
      {toDoItem.length === 0 &&   <WelcomeMessage></WelcomeMessage>}
      <TodoItems onClickDeleteItem= {handleDeletItem} todoItems={toDoItem}></TodoItems>
    </center>
  );
}

export default App;
