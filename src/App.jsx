import './App.css';
import './fontawesome-free-6.1.1-web/css/all.css';
import { useState } from 'react';
import { Task } from './Task';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleChange = event => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const newTaskObj = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      complete: false,
    };
    setTodoList([...todoList, newTaskObj]);
    const inputi = (document.querySelector('.addTask input').value = '');
  };

  const deleteTask = id => {
    setTodoList(todoList.filter(task => task.id !== id));
  };

  const completeTask = id => {
    setTodoList(
      todoList.map(task =>
        task.id === id ? { ...task, complete: true } : task
      )
    );
  };
  return (
    <div className="App">
      <div className="addTask">
        <h2>To Do List with React</h2>
        <input onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {todoList.map(task => {
          return (
            <div>
              <Task
                taskName={task.taskName}
                id={task.id}
                deleteTask={deleteTask}
                complete={task.complete}
                completeTask={completeTask}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;

// these 3 is the react component lifecycle
// Mounting - the component appearing in the screen/ the component starting to exist in ur project

// Updating - the component is changing the UI

// Unmounting - the opposite of Mounting
