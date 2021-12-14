function List({ tasks, onClick }) {
  if (tasks.length === 0) {
    return <h1>할 일이 없어요!</h1>;
  }
  return (
    <>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title}
            <button type="button" onClick={() => onClick(task.id)}>
              완료
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default List;
