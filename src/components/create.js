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
        <Form.Field className="grid-item">
          <label style={{ marginTop: "2px" }}>Student ID</label>
          <input
            placeholder="Student's ID"
            onChange={(e) => setStudentID(e.target.value)}
          />
        </Form.Field>
        <Form.Field className="grid-item">
          <label style={{ marginTop: "2px" }}>Student Name</label>
          <input
            placeholder="Student's Name"
            onChange={(e) => setStudentName(e.target.value)}
          />
        </Form.Field>
        <Form.Field className="grid-item">
          <label style={{ marginTop: "2px" }}>Student's Grade</label>
          <input
            placeholder="Student's Grade"
            onChange={(e) => setStudentGrade(e.target.value)}
          />
        </Form.Field>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            onClick={postData}
            type="submit"
            style={{ marginTop: "10px" }}
          >
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default StudentForm;
