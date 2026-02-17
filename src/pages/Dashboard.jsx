import { useEffect, useState } from "react"
import API from "../api"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import TaskCard from "../components/TaskCard"

export default function Dashboard() {
  const [tasks, setTasks] = useState([])
  const [title, setTitle] = useState("")
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetchTasks()
  }, [])

  const fetchTasks = async () => {
    const res = await API.get("/tasks")
    setTasks(res.data)
  }

  const addTask = async () => {
    if (!title) return
    await API.post("/tasks", { title })
    setTitle("")
    fetchTasks()
  }

  const deleteTask = async (id) => {
    await API.delete(`/tasks/${id}`)
    fetchTasks()
  }

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="main-content">
        <Navbar />

        <div className="task-section">
          <h2>Dashboard</h2>

          <input
            placeholder="Search task..."
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="add-task">
            <input
              value={title}
              placeholder="New Task"
              onChange={(e) => setTitle(e.target.value)}
            />
            <button onClick={addTask}>Add</button>
          </div>

          <div className="task-grid">
            {filteredTasks.map(task => (
              <TaskCard
                key={task._id}
                task={task}
                onDelete={deleteTask}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
