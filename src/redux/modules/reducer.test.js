import reducer, { setTasks, deleteTask, getTaskThunk } from "./reducer";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import tasks from "../../tasks";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock("react-redux");

describe("reducer", () => {
  describe("setTasks", () => {
    it("changes tasks array", () => {
      const state = reducer(
        {
          tasks: [],
        },
        setTasks(tasks)
      );

      expect(state.tasks).not.toHaveLength(0);
    });
  });
  describe("deleteTask", () => {
    it("remove the task from tasks", () => {
      const state = reducer(
        {
          tasks: [{ id: 1, title: "강아지는 귀엽다!" }],
        },
        deleteTask(1)
      );

      expect(state.tasks).toHaveLength(0);
    });
  });

  describe("getTaskThunk", () => {
    it("fetch tasks with api", async () => {
      const store = mockStore({});
      await store.dispatch(getTaskThunk());
      const actions = store.getActions();
      expect(actions[0].payload.tasks[0]).toStrictEqual({
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false,
      });
    });
  });
});
