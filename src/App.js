import React from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo.js';
import './App.css';
import { Paper, List, Container } from '@material-ui/core';
import useTodoViewModel from './viewmodel/TodoViewModel';

function App() {
  const { items, add, remove, update } = useTodoViewModel();

  const todoItems = items.length > 0 && (
    <Paper style={{ margin: 16 }}>
      <List>
        {items.map((item) => (
          <Todo item={item} key={item.id} delete={remove} update={update} />
        ))}
      </List>
    </Paper>
  );

  return (
    <div className="App">
      <Container maxWidth="md">
        <AddTodo add={add} />
        <div className='TodoList'>{todoItems}</div>
      </Container>
    </div>
  );
}

export default App;
