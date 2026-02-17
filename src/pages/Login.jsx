import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"
import API from "../api"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const { login } = useContext(AuthContext)

  const handleLogin = async () => {
    try {
      const res = await API.post("/auth/login", { email, password })
      login(res.data)
      navigate("/dashboard")
    } catch (err) {
      alert(err.response?.data?.msg || "Login failed")
    }
  }

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h2>Login</h2>

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>
          Login
        </button>

        <div
          className="auth-link"
          onClick={() => navigate("/")}
        >
          Don't have an account? Register
        </div>
      </div>
    </div>
  )
}
