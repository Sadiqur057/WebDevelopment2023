import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <center className="todo-container">
      <h1>TODO</h1>

      <div className="container text-center">
        <div className="row">
          <div className="col-6">
            <input type="text" name="" id="" placeholder="Enter ToDO" />
          </div>
          <div className="col-4">
            <input type="date" name="" id="" />
          </div>
          <div className="col-2">
            <button className="btn btn-success">Add</button>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <p>Complete todo</p>
          </div>
          <div className="col-4">
            11/10/23
          </div>
          <div className="col-2">
            <button className="btn btn-danger">Delete</button>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <p>Complete todo</p>
          </div>
          <div className="col-4">
            11/10/23
          </div>
          <div className="col-2">
            <button className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    </center>
  );
}

export default App;
