import React, {useContext} from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Toast from "react-bootstrap/Toast";
import Badge from "react-bootstrap/Badge";
// import {PaginationContext} from "../context/pagination"

const TodoList = (props) => {

  // const paginationContext = useContext(PaginationContext);

  return (
    <ListGroup>
      {props.list.map((item) => (
          <Toast
            action
            // variant={item.complete ? "danger" : "success"} 
            className={`complete-${item.complete.toString()}`}
            key={item._id}
            // show={show} 
            onClose={() => props.handleDelete(item._id)}
          >
            <Toast.Header >
              <Badge pill  variant={item.complete ? "danger" : "success"}>{item.complete ? "Complete" : "Pending..."}</Badge>
              <strong className="mr-auto">{item.assignee}</strong>
            </Toast.Header>
            <Toast.Body onClick={() => props.handleComplete(item._id)}>
              {item.text}
              <div class="difficulty">difficulty : {item.difficulty}</div>
            </Toast.Body>
          </Toast>
      ))}
    </ListGroup>
  );
};

export default TodoList;
