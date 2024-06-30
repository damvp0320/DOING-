import { useState } from "react";
import taskStyle from "../styles/taskStyle.module.css";

interface TaskProps{
    task: string;
    taskDate : Date
}

export function Task({ task, taskDate }: TaskProps) {
  
  const [isVisible, setIsVisible] = useState(true);

  const handleCheckboxChange = () => {
    setIsVisible(!isVisible);
  };

  if (!isVisible) return null;

    return (
      <article className="tsk-article">
        <header className={taskStyle.tskHeader}>
          <div className={taskStyle.tskInfoContainer}>
            <p className={taskStyle.tskTask}>{task}</p>
            <p className={taskStyle.tskDate}>{taskDate.toLocaleString()}</p>
          </div>
          <input
            className={taskStyle.tskCheckbox}
            type="checkbox"
            onChange={handleCheckboxChange}
          ></input>
        </header>
      </article>
    );
}