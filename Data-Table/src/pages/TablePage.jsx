import TableComponent from "../components/TableComponent";
import { useState, useEffect } from "react";

export function TablePage() {

  const [student, setstudent] = useState([])

  const fetchStudentData = async () => {
    try {
      const res = await fetch("http://localhost:3000/Students")
      const data = await res.json()
      setstudent(data)
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    return () => fetchStudentData()
  }, [])
  return (
    <div className="overflow-x-auto">
      <TableComponent rows={student} />
    </div>
  );
}
