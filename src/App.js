import React from 'react';
import {useState} from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [addTask, setAddTask] = useState([]);

  const handleChange = (event) => {
    setInput(event.target.value);
  }
  const handleAddTask = () => {
    const task = {
      id: addTask.length === 0 ? 1 : addTask[addTask.length - 1].id + 1,
      taskName: input,
      completed: false
    }
    const newAddTask = [...addTask , task];
    setAddTask(newAddTask);
  }

  const deleteTask = (item) => {
    const deletedTask = addTask.filter(task => task.id !== item);
    setAddTask(deletedTask);
  }

  const completedTask = (id) => {
    const completedTask = addTask.map(task => {
      if(task.id === id){
        return {...task, completed: true};
      }else {
        return task;
      }
    });
    setAddTask(completedTask);
  }

  return (
    <div className='container'>
      <div className="input-field">
        <input type="text" onChange={handleChange}/>
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <div className="task-area">
        <ul>
          {
            addTask.map(task => 
            <li style={{backgroundColor: task.completed ? 'green' : 'white'}}>
              <h2 className="task-color">{task.taskName}</h2>
              <button onClick = {() => deleteTask(task.id)}>Delete Task</button>
              <button onClick= {() => completedTask(task.id)}>Task Completed</button>
            </li>)
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
