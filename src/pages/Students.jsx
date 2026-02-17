import { useEffect, useState } from "react"
import API from "../api"

export default function Students() {
  const [students, setStudents] = useState([])

  useEffect(() => {
    fetchStudents()
  }, [])

  const fetchStudents = async () => {
    const res = await API.get("/students")
    setStudents(res.data)
  }

  return (
    <div className="student-container">
      <h2 className="title">Student Database</h2>
      <div className="grid">
        {students.map(student => (
          <div className="card" key={student._id}>
            <img src={student.image} alt="student" className="avatar" />
            <h3>{student.name}</h3>
            <p><b>Roll:</b> {student.rollNumber}</p>
            <p><b>Dept:</b> {student.department}</p>
            <p><b>Year:</b> {student.year}</p>
            <p>{student.email}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
