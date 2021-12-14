import axios from "axios";

const URL = `https://jsonplaceholder.typicode.com/todos`;

export async function fetchTasks() {
  const { data } = await axios.get(URL);
  return data;
}
