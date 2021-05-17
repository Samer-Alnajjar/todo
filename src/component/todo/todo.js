import React, { useEffect, useState } from "react";
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

const todoAPI = "https://api-js401.herokuapp.com/api/v1/todo";

const ToDo = () => {
  const [list, _addItem, _toggleComplete, _getTodoItems, deleteTodo] = useAjax();
  // const [list, setList] = useState([]);

  // const _addItem = async (item) => {
  //   item.due = new Date();
  //   const results = await axios.post(todoAPI, item);
  //   setList([...list, results.data]);
  // };

  // const _toggleComplete = async (id) => {
  //   let item = list.filter((i) => i._id === id)[0] || {};

  //   if (item._id) {
  //     item.complete = !item.complete;
  //     let url = `${todoAPI}/${id}`;

  //     const results = await axios.put(url, item);
  //     setList(
  //       list.map((listItem) =>
  //         listItem._id === item._id ? results.data : listItem
  //       )
  //     );
  //   }
  // };

  // const _getTodoItems = () => {
  //   async function fetchData() {
  //     const results = await axios.get(todoAPI);
  //     setList([...results.data.results]);
  //   }

  //   fetchData();
  // };


  // const deleteTodo = async (id) => {
  //   let item = list.find((i) => i._id === id) || {};

  //   if (item._id) {
  //     item.complete = !item.complete;
  //     let url = `${todoAPI}/${id}`;

  //     const results = await axios.delete(url);
  //     setList(list.filter((listItem) =>
  //       listItem._id !== results.data._id
  //     ));    
  //   }
  // };


  

  useEffect(_getTodoItems, []);

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
