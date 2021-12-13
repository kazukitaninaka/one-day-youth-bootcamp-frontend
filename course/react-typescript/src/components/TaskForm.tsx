import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { Task } from '..';
import { tasksState } from '../store';
import { Button, Input, Spacer } from '@nextui-org/react';

export const TaskForm: React.FC = React.memo(() => {
    const setTasks = useSetRecoilState(tasksState);
    // 追加前のタスクを格納する
    const [newTaskLabel, setNewTaskLabel] = useState<string>('');
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
        setTasks((prevTasks) => [...prevTasks, newTask]);
        setNewTaskLabel('');
    };

    // 完了したTaskを削除する
    const handleClearTasks = () => {
        setTasks((prevTasks) => prevTasks.filter((task) => !task.isDone));
    };

    return (
        <>
            <Input
                type="text"
                placeholder="Enter the text"
                value={newTaskLabel}
                onChange={handleNewTaskLabel}
            />
            <Button
                onClick={handleAddTask}
                disabled={!newTaskLabel}
                size="small"
            >
                Add
            </Button>
            <br />
            <Spacer y={1} />
            <Button color="warning" onClick={handleClearTasks} size="small">
                Clear
            </Button>
        </>
    );
});
