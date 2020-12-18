import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/header';
import AddTodo from './components/AddTodo'

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner',
        completed: true
      },
      {
        id: 3,
        title: 'Meeting qwer',
        completed: false
      },
    ]
  }

  // Toggle Complete 
  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todos => {
      if (todos.id === id) {
        todos.completed = !todos.completed
      }
      return todos;
    })})
  }

  //Delete Todo
  delTodo = (id) => {
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id )]})
  }

  // Add Todo
  addTodo = (title) => {
    console.log(title);
  }

  render() {
      return (
          <div className='App'>
          <div className='container'>
            
            <Header />
            <AddTodo addTodo={this.addTodo}/>
              <Todos todos={this.state.todos } markComplete={this.markComplete} delTodo= {this.delTodo}/>
          </div>
          </div>

      );
  }
}

export default App;
