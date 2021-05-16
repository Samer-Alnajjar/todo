import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import TodoForm from "./form.js";
import TodoList from "./list.js";

import "./todo.scss";

const ToDo = (props) => {
  const [list, setList] = useState([]);

  const addItem = (item) => {
    item._id = Math.random();
    item.complete = false;
    setList([...list, item]);
    // this.setState({ list: [...this.state.list, item]});
  };

  const toggleComplete = (id) => {
    let item = list.filter((i) => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;
      let listGenerated = list.map((listItem) =>
        listItem._id === item._id ? item : listItem
      );
      setList(listGenerated);
    }
  };

  useEffect(() => {
    let newList = [
      {
        _id: 1,
        complete: false,
        text: "Clean the Kitchen",
        difficulty: 3,
        assignee: "Person A",
      },
      {
        _id: 2,
        complete: false,
        text: "Do the Laundry",
        difficulty: 2,
        assignee: "Person A",
      },
      {
        _id: 3,
        complete: false,
        text: "Walk the Dog",
        difficulty: 4,
        assignee: "Person B",
      },
      {
        _id: 4,
        complete: true,
        text: "Do Homework",
        difficulty: 3,
        assignee: "Person C",
      },
      {
        _id: 5,
        complete: false,
        text: "Take a Nap",
        difficulty: 1,
        assignee: "Person B",
      },
    ];

    setList(newList);
  }, []);

  useEffect(() => {
    document.title =
      "To DO- complete: " +
      list.filter((item) => !item.complete).length +
      "/" +
      "Incomplete: " +
      list.filter((item) => item.complete).length;
  });

  return (
    <div className="form-container">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          There are {list.filter((item) => !item.complete).length} Items To
          Complete
        </Navbar.Brand>
      </Navbar>
      <br></br>
      <Container fluid="md">
        <Row>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <TodoForm handleSubmit={addItem} />
            </Card.Body>
          </Card>

          <Col sm={7} className="list-item">
            <TodoList list={list} handleComplete={toggleComplete} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ToDo;
