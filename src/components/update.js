import React, { useEffect, useState } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Update() {
  const [studentID, setStudentID] = useState("");
  const [studentName, setStudentName] = useState("");
  const [studentGrade, setStudentGrade] = useState("");
  const [id, setID] = useState(null);
  let navigate = useNavigate();

  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setStudentID(localStorage.getItem("studentID"));
    setStudentName(localStorage.getItem("Name"));
    setStudentGrade(localStorage.getItem("Grade"));
  }, []);

  const updateAPIData = () => {
    axios
      .put(`https://6460b503ca2d89f7e75d118b.mockapi.io/students/${id}`, {
        studentID,
        studentName,
        studentGrade,
      })
      .then(() => navigate("/read"));
  };

  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>Student's ID</label>
          <input
            placeholder="Student's ID"
            value={studentID}
            onChange={(e) => setStudentID(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Student's Name</label>
          <input
            placeholder="Student's Name"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Student's Grade</label>
          <input
            placeholder="Student's Grade"
            value={studentGrade}
            onChange={(e) => setStudentGrade(e.target.value)}
          />
        </Form.Field>
        <Button type="submit" onClick={updateAPIData}>
          Update
        </Button>
      </Form>
    </div>
  );
}

export default Update;
