import React, { useEffect, useContext } from "react";
// import axios from "axios";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import TodoForm from "./form.js";
import TodoList from "./list.js";
import useAjax from "../hooks/axiosHook"
import "./todo.scss";
import {PaginationContext} from "../context/pagination";

const ToDo = () => {
  const [list, _addItem, _toggleComplete, _getTodoItems, deleteTodo] = useAjax();

  // const paginationContext = useContext(PaginationContext);

  useEffect(_getTodoItems, [_getTodoItems]);

  useEffect(() => {
    document.title =
      "Complete: " +
      list.filter((item) => item.complete).length +
      "/" +
      "Incomplete: " +
      list.filter((item) => !item.complete).length;
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
          <Card style={{ width: "18rem", height: "30%" }}>
            <Card.Body>
              <TodoForm handleSubmit={_addItem} />
            </Card.Body>
          </Card>

          <Col sm={7} className="list-item">
            <TodoList list={list} handleComplete={_toggleComplete}  handleDelete ={deleteTodo}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ToDo;
