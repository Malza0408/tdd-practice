import { useEffect } from "react";
import "./App.css";
import ListContainer from "./components/ListContainer";
import tasks from "./tasks";
import { setTasks } from "./redux/modules/reducer";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTasks(tasks));
  }, [dispatch]);

  return (
    <>
      <h1>To-do ListContainer with Testing Lib</h1>
      <ListContainer />
    </>
  );
}

export default App;
