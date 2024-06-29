import { useState } from "react";
import "../styles/modal.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddTask: (task: string, taskDate: Date) => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onAddTask }) => {
  const [task, setTask] = useState("");
  const [taskDate, setTaskDate] = useState("");

  const handleTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskDate(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onAddTask(task, new Date(taskDate));
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modalContainer">
      <div className="modal">
        <h1>Add your Task</h1>
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="task">Task to be done:</label>
          <input
            type="text"
            value={task}
            onChange={handleTaskChange}
            required
          />
          <label htmlFor="deadline">Deadline:</label>
          <input
            type="date"
            value={taskDate}
            onChange={handleDateChange}
            required
          />
          <button type="submit" className="closeBtn">
            Set
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
