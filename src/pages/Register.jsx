import { useState } from "react"
import API from "../api"
import { useNavigate } from "react-router-dom"

export default function Register() {
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const navigate = useNavigate()

  const handleRegister = async ()=>{
    try {
      await API.post("/auth/register",{name,email,password})
      alert("Registration successful")
      navigate("/login")
    } catch (err) {
      alert(err.response?.data?.msg || "Registration failed")
    }
  }

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h2>Create Account</h2>

        <input 
          placeholder="Full Name"
          value={name}
          onChange={e=>setName(e.target.value)}
        />

        <input 
          placeholder="Email"
          value={email}
          onChange={e=>setEmail(e.target.value)}
        />

        <input 
          type="password"
          placeholder="Password"
          value={password}
          onChange={e=>setPassword(e.target.value)}
        />

        <button onClick={handleRegister}>
          Register
        </button>

        <div 
          className="auth-link"
          onClick={()=>navigate("/login")}
        >
          Already have an account? Login
        </div>
      </div>
    </div>
  )
}
