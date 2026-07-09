import "../css/Task.css";

export default function TaskList({
  tasks,
  total,
  setFilter,
  edit,
  del,
  toggle,
}) {
  return (
    <>
      <div className="filters">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("pending")}>Pending</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
      </div>

      <p>Total Tasks: {total}</p>

      {tasks.map((task, index) => (
        <div className="task">
          <div>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggle(index)}
            />

            <span className={task.completed ? "done" : ""}>
              {task.text}
            </span>
          </div>

          <div>
            <button onClick={() => edit(index)}>Edit</button>

            <button onClick={() => del(index)}>Delete</button>
          </div>
        </div>
      ))}
    </>
  );
}