import { useState } from "react";
import styles from "../styles/modal.module.css";

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
    <div className={styles.modalContainer}>
      <div className={styles.modal}>
        <h1>Add your Task</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
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
          <button type="submit" className={styles.closeBtn}>
            Set
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
