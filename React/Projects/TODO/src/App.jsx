import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import ToDoItem from "./components/ToDoItem";
function App() {
  return (
    <center className="todo-container">
      <AppName />
      <AddToDo />
      <div className="items-container">
        <ToDoItem />
        <ToDoItem />
      </div>
    </center>
  );
}

export default App;
