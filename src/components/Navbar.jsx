import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

export default function Navbar() {
  const { user, logout } = useContext(AuthContext)

  return (
    <div className="navbar">
      <h3>Student Portal</h3>
      <div>
        <span>{user?.name}</span>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  )
}
