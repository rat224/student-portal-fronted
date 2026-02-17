export default function TaskCard({ task, onDelete }) {
  return (
    <div className="task-card">
      <p>{task.title}</p>
      <button onClick={() => onDelete(task._id)}>Delete</button>
    </div>
  )
}
