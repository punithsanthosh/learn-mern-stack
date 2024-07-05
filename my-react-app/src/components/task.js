import Card from "./card";
import Input from "./input";
import { useState } from "react";

const Task = () => {
  const initialTasks = [
    {
      id: 1,
      taskName: "punith",
    },
    {
      id: 2,
      taskName: "santhosh",
    },
  ];

  const [tasks, setTasks] = useState(initialTasks);

  const addTaskHandler = (taskName) => {
    const newTask = {
      id: Math.random(),
      taskName: taskName,
    };
    setTasks((prev) => [...prev, newTask]);
  };
  const completeTaskHandler = () => {};
  return (
    <div>
      <main>
        <Input addTaskHandler={addTaskHandler} />

        {tasks.map((task) => (
          <Card taskname={task.taskname} />
        ))}
        <Card taskName="Task 1" />
        <Card taskName="Learn React" />
        <Card taskName="Make a table  " />
      </main>
    </div>
  );
};
export default Task;
