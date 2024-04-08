import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TodoItem from './Todoitem';

function TodoList({ todos, deleteTodo, updateTodoStatus, handleEdit }) {
  return (
    <div>
      <h2>Todo List</h2>
      <Row xs={1} lg={3} className="g-4">
        {todos.map(todo => (
          <Col key={todo.id}>
            <TodoItem
              todo={todo}
              deleteTodo={deleteTodo}
              updateTodoStatus={updateTodoStatus}
              handleEdit={handleEdit}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default TodoList;
