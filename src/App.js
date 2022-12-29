import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getError } from "./store/errors";
import {
  completeTask,
  createTask,
  getTaskLoadingStatus,
  getTasks,
  loadTasks,
  taskDeleted,
  titleChanged,
} from "./store/task";

function App() {
  const state = useSelector(getTasks());
  const isLoading = useSelector(getTaskLoadingStatus());
  const error = useSelector(getError());
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();

  const changeTitle = (id) => {
    dispatch(titleChanged(id));
  };

  const deleteTask = (id) => {
    dispatch(taskDeleted(id));
  };

  useEffect(() => {
    dispatch(loadTasks());
  }, []);

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;
  return (
    <div className="App">
      <ul>
        <input
          value={title}
          placeholder="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={() => dispatch(createTask(title))}>
          Add new task
        </button>
        {state.map((task) => (
          <li key={task.id}>
            <h3>{task.title}</h3>
            <div>{`Completed: ${task.completed}`}</div>
            <div>
              <button onClick={() => dispatch(completeTask(task.id))}>
                Complete
              </button>
              <button onClick={() => changeTitle(task.id)}>Change Title</button>
              <button onClick={() => deleteTask(task.id)}>Delete task</button>
            </div>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
