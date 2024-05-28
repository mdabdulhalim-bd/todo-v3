function TodoItem({ todoName, todoDate, deleteExistItem }) {
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-4 shadow-lg p-3 mb-5 bg-body-tertiary rounded">{todoName}</div>
        <div className="col-4 shadow-lg p-3 mb-5 bg-body-tertiary rounded">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger del-button" onClick={() => deleteExistItem(todoName)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
