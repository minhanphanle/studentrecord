import React, { useEffect, useState } from "react";
import { Table, Button } from "semantic-ui-react";
import axios from "axios";
import { Link } from "react-router-dom";

function Read() {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios
      .get("https://6460b503ca2d89f7e75d118b.mockapi.io/students")
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);
  const setData = (data) => {
    let { studentID, studentName, studentGrade, id } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("studentID", studentID);
    localStorage.setItem("Name", studentName);
    localStorage.setItem("Grade", studentGrade);
    console.log(data);
  };
  const getData = () => {
    axios
      .get(`https://6460b503ca2d89f7e75d118b.mockapi.io/students`)
      .then((getData) => {
        setAPIData(getData.data);
      });
  };
  const onDelete = (id) => {
    axios
      .delete(`https://6460b503ca2d89f7e75d118b.mockapi.io/students/${id}`)
      .then(() => {
        getData();
      });
  };
  return (
    <div>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Student ID</Table.HeaderCell>
            <Table.HeaderCell>Student Name</Table.HeaderCell>
            <Table.HeaderCell>Student Grade</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {APIData.map((data) => {
            return (
              <Table.Row>
                <Table.Cell>{data.studentID}</Table.Cell>
                <Table.Cell>{data.studentName}</Table.Cell>
                <Table.Cell>{data.studentGrade}</Table.Cell>
                <Link to="/update">
                  <Table.Cell>
                    <Button onClick={() => setData(data)}>Update</Button>
                  </Table.Cell>
                </Link>
                <Table.Cell>
                  <Button onClick={() => onDelete(data.id)}>Delete</Button>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}

export default Read;
