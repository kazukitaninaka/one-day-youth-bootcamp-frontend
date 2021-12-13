import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { TaskList } from './components/TaskList';
import { TaskForm } from './components/TaskForm';
import { request } from './server';
import { useSetRecoilState, RecoilRoot } from 'recoil';
import { tasksState } from './store';
import { CssBaseline } from '@nextui-org/react';

// TODOタスクの型
export type Task = {
    label: string;
    isDone: boolean;
};

const App: React.VFC = () => {
    const setTasks = useSetRecoilState(tasksState);
    // ページマウント時にモックAPIからデータを取得
    useEffect(() => {
        request.fetchTasks((payload: Task[]) => setTasks(payload));
    }, []);

    return (
        <div style={{ width: '700px', margin: '0 auto' }}>
            {/* ヘッダー */}
            <h1>Tutorial Works</h1>
            <h2>React Todo List</h2>
            {/* 一覧表示 */}
            <TaskList />

            {/* タスク追加、削除 */}
            <TaskForm />
        </div>
    );
};

ReactDOM.render(
    <RecoilRoot>
        <CssBaseline />
        <App />
    </RecoilRoot>,
    document.querySelector('#app')
);
