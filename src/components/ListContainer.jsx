import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import List from "./List";
import { deleteTask, getTaskThunk } from "../redux/modules/reducer";

function ListContainer() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.reducer.tasks);
  // const test = dispatch(getTaskThunk());

  function handleClick(id) {
    dispatch(deleteTask(id));
  }

  return <List tasks={tasks} onClick={handleClick} />;
}

export default ListContainer;
