import React from "react";
import useForm from "../hooks/formHook";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const TodoForm = (props) => {
  // eslint-disable-next-line no-unused-vars
  const [item, handleInputChange, handleSubmit] = useForm(props);

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <h3>Add Item</h3>
          <Form.Label>To Do Item</Form.Label>
          <Form.Control
            type="text"
            name="text"
            placeholder="Add To Do List Item"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicRange">
          <Form.Label>Difficulty Rating</Form.Label>
          <Form.Control
            defaultValue="1"
            type="range"
            min="1"
            max="5"
            name="difficulty"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Assigned To</Form.Label>
          <Form.Control
            type="text"
            name="assign"
            placeholder="Assigned To"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Item
        </Button>
      </Form>
    </>
  );
};

export default TodoForm;
