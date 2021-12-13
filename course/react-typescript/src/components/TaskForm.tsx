import React, { useState } from "react";
import { Task } from "..";

type Props = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

export const TaskForm: React.FC<Props> = React.memo(({ tasks, setTasks }) => {
  // 追加前のタスクを格納する
  const [newTaskLabel, setNewTaskLabel] = useState<string>("");
  // フォームの値を保持する
  const handleNewTaskLabel = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTaskLabel(e.target.value);
  };

  // Taskの登録
  const handleAddTask = () => {
    const newTask = {
      label: newTaskLabel,
      isDone: false,
    } as Task;
    setTasks([...tasks, newTask]);
    setNewTaskLabel("");
  };

  // 完了したTaskを削除する
  const handleClearTasks = () => {
    const newTasks = tasks.filter((task) => !task.isDone);
    setTasks(newTasks);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter the text"
        value={newTaskLabel}
        onChange={(e) => handleNewTaskLabel(e)}
      />
      <button onClick={handleAddTask}>Add</button>
      <br />
      <button onClick={handleClearTasks}>Clear</button>
    </>
  );
});
