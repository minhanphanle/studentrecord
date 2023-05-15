import { Button, Form } from "semantic-ui-react";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const StudentForm = () => {
  let navigate = useNavigate();
  const [studentID, setStudentID] = useState("");
  const [studentName, setStudentName] = useState("");
  const [studentGrade, setStudentGrade] = useState("");
  const postData = () => {
    axios
      .post(`https://6460b503ca2d89f7e75d118b.mockapi.io/students`, {
        studentID,
        studentName,
        studentGrade,
      })
      .then(() => {
        navigate("/read");
      });
  };
  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>Student ID</label>
          <input
            placeholder="Student's ID"
            onChange={(e) => setStudentID(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Student Name</label>
          <input
            placeholder="Student's Name"
            onChange={(e) => setStudentName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Student's Grade</label>
          <input
            placeholder="Student's Grade"
            onChange={(e) => setStudentGrade(e.target.value)}
          />
        </Form.Field>
        <Button onClick={postData} type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default StudentForm;
