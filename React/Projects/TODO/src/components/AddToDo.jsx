function AddToDo() {
  return (
    <div className="container text-center my-2">
      <div className="row my-1 mx-3">
        <div className="col-6">
          <input type="text" name="" id="" placeholder="Enter ToDO" />
        </div>
        <div className="col-4">
          <input type="date" name="" id="" />
        </div>
        <div className="col-1">
          <button className="btn btn-success mx-1">Add</button>
        </div>
      </div>
    </div>
  );
}
export default AddToDo;
