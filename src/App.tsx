import { Task } from "./components/task";
import "./styles/style.css";
import { useState } from "react";
import Modal from "./components/modal";

export function App() {
  const [isOpen, setIsOpen] = useState(false);

  // array of objects objects with task props
  const [tasks, setTasks] = useState < { task: string; taskDate: Date }[]>([]);


  const handleModal = () => setIsOpen(!isOpen);
  const handleAddTask = (task: string, taskDate: Date) => {
    setTasks([...tasks, { task, taskDate }]);//Implementing new task with previus tasks
  };
3
  return (
    <>
      <div className="appContainer">
        <div className="tittle">DOING</div>
        <button className="addTaskBtn" onClick={handleModal}>
          ADD TASK
        </button>
        <div className="taskContainer">
          {tasks.map((taskItem, index) => (
            <Task
              key={index}
              task={taskItem.task}
              taskDate={taskItem.taskDate}
            />
          ))}
          <Modal
            isOpen={isOpen}
            onClose={handleModal}
            onAddTask={handleAddTask}
          />
        </div>
      </div>
    </>
  );
}


export default App;
