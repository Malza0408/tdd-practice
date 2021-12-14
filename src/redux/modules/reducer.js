import { fetchTasks } from "../../services/api";
export function setTasks(tasks) {
  return {
    type: "setTasks",
    payload: {
      tasks,
    },
  };
}

export function deleteTask(id) {
  return {
    type: "deleteTask",
    payload: {
      id,
    },
  };
}

export function getTaskThunk() {
  return async (dispatch) => {
    const tasks = await fetchTasks();
    dispatch(setTasks(tasks.slice(0, 2)));
  };
}

const initialState = {
  tasks: [],
};

export default function reducer(previousState = initialState, action) {
  if (action.type === "setTasks") {
    const { tasks } = action.payload;
    return {
      ...previousState,
      tasks,
    };
  }

  if (action.type === "deleteTask") {
    const { tasks } = previousState;
    const { id } = action.payload;
    return {
      ...previousState,
      tasks: tasks.filter((task) => task.id !== id),
    };
  }
  return previousState;
}
