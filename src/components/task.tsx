import { useState } from "react";

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
        <header className="tsk-header">
          <input className="tsk-checkbox" type="checkbox" onChange={handleCheckboxChange}></input>
          <div className="tsk-info-container">
            <p className="tsk-task">{task}</p>
            <p className="tsk-date">{taskDate.toLocaleString()}</p>
          </div>
        </header> 
      </article>
    );
}