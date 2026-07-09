import { useState } from "react";
import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [filter, setFilter] = useState("all");

  function submit() {
    if (text.trim() === "") return;

    if (editIndex !== null) {
      const newTasks = [...tasks];
      newTasks[editIndex].text = text;
      setTasks(newTasks);
      setEditIndex(null);
    } else {
      setTasks([
        ...tasks,
        {
          text: text,
          completed: false,
        },
      ]);
    }

    setText("");
  }

  function edit(index) {
    setText(tasks[index].text);
    setEditIndex(index);
  }

  function del(index) {
    setTasks(tasks.filter((task, i) => i !== index));
  }

  function toggle(index) {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  }

  let filteredTasks = tasks;

  if (filter === "pending") {
    filteredTasks = tasks.filter((task) => !task.completed);
  }

  if (filter === "completed") {
    filteredTasks = tasks.filter((task) => task.completed);
  }

  return (
    <div className="container">
      <Header />

      <TaskInput
        text={text}
        setText={setText}
        submit={submit}
        editing={editIndex !== null}
      />

      <TaskList
        tasks={filteredTasks}
        total={tasks.length}
        setFilter={setFilter}
        edit={edit}
        del={del}
        toggle={toggle}
      />
    </div>
  );
}