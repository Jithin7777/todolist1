import React from "react";
import { deleteTask } from "../service/allapi";
import { ListGroup, Button, Card, Container } from "react-bootstrap";

const TaskList = ({ tasks, onEdit, onDelete }) => {
  const handleDelete = async (id) => {
    try {
      await deleteTask(id);

      onDelete(); // call onDelete after a task is deleted to refresh the list
      alert("Task deleted successfully");

    } catch (error) {
      console.error("Error deleting task:", error.message);
    }
  };

  return (
    <Container className="w-50 ">
      <ListGroup className="mt-3">
        {tasks.map((task) => (
          <Card
            key={task._id}
            className="mb-3 "
            style={{ borderRadius: "10px" }}
          >
            <Card.Body
              className="d-flex justify-content-between align-tems-center bg-black  text-white shadow-lg"
              style={{ borderRadius: "10px" }}
            >
              <Card.Title><span>{task.title}</span></Card.Title>
              <div>
                <Button
                  variant="danger"
                  className="float-end"
                  onClick={() => handleDelete(task._id)}
                >
                  Delete
                </Button>
                <Button
                  variant="success"
                  className="float-end me-2"
                  onClick={() => onEdit(task)}
                >
                  Edit
                </Button>
              </div>{" "}
            </Card.Body>
          </Card>
        ))}
      </ListGroup>
    </Container>
  );
};

export default TaskList;
