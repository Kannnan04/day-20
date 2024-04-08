import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [editedTaskName, setEditedTaskName] = useState('');
  const [editedDescription, setEditedDescription] = useState('');
  const [editTodoId, setEditTodoId] = useState(null);
  const [filterStatus, setFilterStatus] = useState('all');

  const addTodo = () => {
    const newTodo = {
      id: todos.length + 1,
      taskName: editedTaskName,
      description: editedDescription,
      status: 'not completed',
    };
    setTodos([...todos, newTodo]);
    setEditedTaskName('');
    setEditedDescription('');
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  const updateTodoStatus = (id, status) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, status } : todo
    );
    setTodos(updatedTodos);
  };

  const handleEdit = (todo) => {
    setEditTodoId(todo.id);
    setEditedTaskName(todo.taskName);
    setEditedDescription(todo.description);
  };

  const saveEdit = () => {
    const updatedTodos = todos.map(todo =>
      todo.id === editTodoId ? { ...todo, taskName: editedTaskName, description: editedDescription } : todo
    );
    setTodos(updatedTodos);
    setEditTodoId(null);
    setEditedTaskName('');
    setEditedDescription('');
  };

  const handleFilterChange = (status) => {
    setFilterStatus(status);
  };

  const filteredTodos = todos.filter(todo => {
    if (filterStatus === 'all') {
      return true;
    }
    return todo.status === filterStatus;
  });

  return (
    <Container
      className="d-flex justify-content-center"
      style={{ paddingTop: '50px', minHeight: '100vh' }}
    >
      <div style={{ width: '400px' }}>
        <h1>Todo App</h1>
        <Row>
          <Col>
            <input type="text" placeholder="Task Name" value={editedTaskName} onChange={(e) => setEditedTaskName(e.target.value)} required/>
          </Col>
          <Col>
            <input type="text" placeholder="Description" value={editedDescription} onChange={(e) => setEditedDescription(e.target.value)} required/>
          </Col>
          <Col>
            {editTodoId ? (
              <button className="btn btn-primary" onClick={saveEdit}>Update</button>
            ) : (
              <button className="btn btn-primary" onClick={addTodo}>Add Todo</button>
            )}
          </Col>
        </Row>
        <Row>
         
          <Col>
            <Form.Group controlId="formStatus">
              <Form.Label>Status</Form.Label>
              <Form.Control as="select" value={filterStatus} onChange={(e) => handleFilterChange(e.target.value)}>
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="not completed">Not Completed</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <TodoList todos={filteredTodos} deleteTodo={deleteTodo} updateTodoStatus={updateTodoStatus} handleEdit={handleEdit} />
      </div>
    </Container>
  );
}

export default App;












