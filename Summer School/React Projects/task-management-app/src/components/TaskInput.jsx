export default function ({ text, setText, submit, editing }) {
  return (
    <div className="row">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={submit}>{editing ? "Update" : "Add Task"}</button>
    </div>
  );
}
