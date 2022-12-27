import { useEffect, useState } from "react";
import { taskCompleted, taskDeleted, titleChanged } from "./store/actions";
import { initiateStore } from "./store/store";

const store = initiateStore();

function App() {
  const [state, setState] = useState(store.getState());

  const completeTask = (id) => {
    store.dispatch(taskCompleted(id));
  };

  const changeTitle = (id) => {
    store.dispatch(titleChanged(id));
  };

  const deleteTask = (id) => {
    store.dispatch(taskDeleted(id));
  };

  useEffect(() => {
    store.subscribe(() => {
      setState(store.getState());
    });
  }, []);

  return (
    <div className="App">
      <ul>
        {state.map((task) => (
          <li key={task.id}>
            <h3>{task.title}</h3>
            <div>{`Completed: ${task.completed}`}</div>
            <div>
              <button onClick={() => completeTask(task.id)}>Complete</button>
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
