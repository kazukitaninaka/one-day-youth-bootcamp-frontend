import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { TaskList } from "./components/TaskList";
import { TaskForm } from "./components/TaskForm";
import { request } from "./server";
import store from "./store";

// TODOタスクの型
export type Task = {
  label: string;
  isDone: boolean;
};

const App: React.VFC = () => {
  // タスクリストを格納する
  const [tasks, setTasks] = useState<Task[]>([]);
  // ページマウント時にモックAPIからデータを取得
  useEffect(() => {
    console.log(store.getState());
    request.fetchTasks((payload: Task[]) => setTasks(payload));
  }, []);

  return (
    <div style={{ width: "700px", margin: "0 auto" }}>
      {/* ヘッダー */}
      <h1>Tutorial Works</h1>
      <h2>React Todo List</h2>
      {/* 一覧表示 */}
      <TaskList {...{ tasks, setTasks }} />

      {/* タスク追加、削除 */}
      <TaskForm {...{ tasks, setTasks }} />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#app"));
