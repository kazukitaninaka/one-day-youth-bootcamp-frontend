import React from "react";
import { Task } from "..";
import { useRecoilState } from "recoil";
import { tasksState } from "../store";

export const TaskList: React.FC = () => {
  const [tasks, setTasks] = useRecoilState(tasksState);
  // Taskの状態を切り替える
  function handleCheckBox(e: React.ChangeEvent<HTMLInputElement>, i: number) {
    const newTasks = tasks.map((task: Task, _i) => {
      return _i === i ? { ...task, isDone: e.target.checked } : task;
    });
    setTasks(newTasks);
  }

  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={`todo-${index}`}>
          {task.isDone ? <s>{task.label}</s> : task.label}
          <input
            checked={task.isDone}
            type="checkbox"
            onChange={(e) => handleCheckBox(e, index)}
          />
        </li>
      ))}
    </ul>
  );
};
