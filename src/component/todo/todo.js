import React, { useEffect, useContext } from "react";
// import axios from "axios";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import TodoForm from "./form.js";
import TodoList from "./list.js";
import useAjax from "../hooks/axiosHook";
import "./todo.scss";
import { PaginationContext } from "../context/pagination";
import Form from "react-bootstrap/Form";
import Pagination from "react-bootstrap/Pagination";

const ToDo = () => {
  const [list, _addItem, _toggleComplete, _getTodoItems, deleteTodo] =
    useAjax();

  const paginationContext = useContext(PaginationContext);

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
          There are{" "}
          {paginationContext.items.filter((item) => !item.complete).length}{" "}
          Items To Complete
        </Navbar.Brand>
      </Navbar>
      <br></br>

      <Form
        style={{
          margin: "1rem auto 0",
          width: "500px",
          backgroundColor: "rgb(219, 219, 219)",
          padding: "0.5rem 1rem 0.5rem 2rem",
        }}
      >
        <div key={`inline-radio`} className="mb-3">
          <Form.Check
            inline
            label="completed To Do Item"
            name="sort"
            type="radio"
            id={`inline-radio-1`}
            onClick={() => {
              paginationContext.setOffset(0);
              paginationContext.setItems(
                paginationContext.list.filter((item) => item.complete === true)
              );
            }}
          />
          <Form.Check
            inline
            label="difficulty"
            name="sort"
            type="radio"
            id={`inline-radio-2`}
            onClick={() => {
              paginationContext.setOffset(0);
              let sorted = paginationContext.list.sort(
                (a, b) => a.difficulty - b.difficulty
              );
              paginationContext.setItems([...sorted]);
            }}
          />
          <Form.Check
            inline
            label="pending To Do Item"
            name="sort"
            type="radio"
            id={`inline-radio-3`}
            onClick={() => {
              paginationContext.setOffset(0);
              paginationContext.setItems(
                paginationContext.list.filter((item) => item.complete === false)
              );
            }}
          />
        </div>
      </Form>

      <Container fluid="md">
        <Row>
          <Card style={{ width: "18rem", height: "30%" }}>
            <Card.Body>
              <TodoForm handleSubmit={_addItem} />
            </Card.Body>
          </Card>

          <Col sm={7} className="list-item">
            <TodoList
              list={paginationContext.items}
              handleComplete={_toggleComplete}
              handleDelete={deleteTodo}
            />
            <Pagination style={{ margin: "1rem auto 0", width: "120px" }}>
              <Pagination.Prev
                // disabled={!paginationContext.disable}
                onClick={() => {
                  let count = paginationContext.page;
                  if (count > 1) --count;

                  let arr = [];

                  for (
                    let index = paginationContext.offset;
                    index < paginationContext.itemsNum;
                    index++
                  ) {
                    arr.push(paginationContext.items[index]);
                  }

                  let offset = paginationContext.offset;
                  if (offset >= 3) offset -= 3;
                  if (paginationContext.offset < 3) {
                    paginationContext.setDisable(false);
                    offset = 0;
                  }

                  paginationContext.setOffset(offset);
                  paginationContext.setPage(count);
                }}
              />
              <Pagination.Next
                disabled={paginationContext.disable}
                onClick={() => {
                  let count = paginationContext.page;
                  let arr = [];
                  if (
                    Math.ceil(
                      paginationContext.items.length /
                        paginationContext.itemsNum
                    ) > count
                  ) {
                    ++count;
                  }

                  for (
                    let index = paginationContext.offset;
                    index < paginationContext.itemsNum;
                    index++
                  ) {
                    arr.push(paginationContext.items[index]);
                  }

                  let offset = paginationContext.offset;

                  if (offset < paginationContext.items.length) {
                    offset += 3;
                    paginationContext.setOffset(offset);
                    paginationContext.setPage(count);
                  }

                }}
              />
            </Pagination>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ToDo;
