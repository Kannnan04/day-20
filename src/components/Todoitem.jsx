import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function TodoItem({ todo, deleteTodo, updateTodoStatus, handleEdit }) {
  const handleStatusChange = (e) => {
    updateTodoStatus(todo.id, e.target.value);
  };

  return (
    <Card bg="light" style={{ marginBottom: '15px' }}>
      <Card.Body>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <h4>My Todos</h4>
          <div >
            <Form.Group controlId="formTaskName" >
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" value={todo.taskName} readOnly  />
            </Form.Group>
            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} value={todo.description} readOnly r/>
            </Form.Group>
            <Form.Group controlId="formStatus">
              <Form.Label>Status</Form.Label>
              <Form.Control as="select" value={todo.status} onChange={handleStatusChange}>
                <option value="completed">Completed</option>
                <option value="not completed">Not Completed</option>
              </Form.Control>
            </Form.Group>
            <Button variant="primary" onClick={() => handleEdit(todo)}>Edit</Button>{' '}
            <Button variant="danger" onClick={() => deleteTodo(todo.id)}>Delete</Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default TodoItem;



