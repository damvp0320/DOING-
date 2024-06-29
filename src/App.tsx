import { Task } from "./components/task";
import "./styles/style.css";
import { useState } from "react";
import Modal from "./components/modal";

export function App() {
  const [isOpen, setIsOpen] = useState(false);

  // array of objects objects with task props
  const [tasks, setTasks] = useState<{ task: string; taskDate: Date }[]>([]);


  const handleModal = () => setIsOpen(!isOpen);
  const handleAddTask = (task: string, taskDate: Date) => {
    setTasks([...tasks, { task, taskDate }]);//Implementing new task with previus tasks
  };
3
  return (
    <>
      {/* Iterating all tasks array */}
      {tasks.map((taskItem, index) => (
        <Task key={index} task={taskItem.task} taskDate={taskItem.taskDate} />
      ))}
      <button onClick={handleModal}>Add task</button>
      <Modal isOpen={isOpen} onClose={handleModal} onAddTask={handleAddTask} />
    </>
  );
}


export default App;
