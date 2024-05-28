import { useState } from "react";
function AddTodo({addNewItem}) {

  const [toDoItemName,  setToDoItem] = useState();
  const [toDoItemDueDate,  setToDoItemDueDate] = useState();

  const hanldeToDoItem= (e)=>{
      setToDoItem(e.target.value)
  }

  const hanldeToDoItemDueDate= (e)=>{
    setToDoItemDueDate(e.target.value)
}

const handleAddButtonItemClick= () =>{
  addNewItem(toDoItemName, toDoItemDueDate);
  setToDoItem("");
  setToDoItemDueDate("");
}


  return (
    <div className=" text-center  ">
      <div className="row kg-row">
        <div className="col-4">
          <input className="form-control" type="text" value={toDoItemName} placeholder="Enter Todo Here" onChange={hanldeToDoItem}/>
        </div>
        <div className="col-4">
          <input className="form-control" type="date" value={toDoItemDueDate} onChange={hanldeToDoItemDueDate} />
        </div>
        <div className="col-1">
          <button type="button" className="btn btn-success add-button" onClick={handleAddButtonItemClick}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
