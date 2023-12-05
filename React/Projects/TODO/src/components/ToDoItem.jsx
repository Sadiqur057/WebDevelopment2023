function ToDoItem() {
  let todoName = 'Complete todo';
  let todoDate = '12/11/2023';
  return (
    <div className="container">
      <div className="row my-1 mx-2">
        <div className="col-6">
          <p>{todoName}</p>
        </div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button className="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>
  );
}
export default ToDoItem;
