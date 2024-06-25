import logo from './logo.svg';
import './App.css';
import  Header from '../src/components/header';
import Card from '../src/components/card';
import {useState} from "react";
import Input from './components/input';
function App() {
  const initialTasks = [
    {
    id: 1,
    taskName: "punith"
    },{
      id: 2,
      taskName: "santhosh"
    }

  ]
  
  
    const [tasks, setTasks]= useState(initialTasks);

    const addTaskHandler = (taskName) =>{
      const newTask={
        id:Math.random(),
        taskName:taskName
      }
      setTasks(prev => [...prev,newTask])
    }
    const completeTaskHandler = () => {

      }
  
  return (
    <div className="App">
      <Header/> 
      <main>
        <Input addTaskHandler={addTaskHandler}/>
        
        {tasks.map(task=> <Card taskname={task.taskname} />)}
        <Card taskName="Task 1"/>
        <Card taskName="Learn React"/>
        <Card taskName="Make a table  "/>
      </main>
      
        </div>
  );

    
  
}

export default App;
