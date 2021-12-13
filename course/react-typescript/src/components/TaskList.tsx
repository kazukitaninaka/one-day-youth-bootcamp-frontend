import React from 'react';
import { Task } from '..';
import { useRecoilState } from 'recoil';
import { tasksState } from '../store';
import { Checkbox, Text } from '@nextui-org/react';
import { CheckboxEvent } from '@nextui-org/react/esm/checkbox/checkbox';

export const TaskList: React.FC = () => {
    const [tasks, setTasks] = useRecoilState(tasksState);
    // Taskの状態を切り替える
    function handleCheckBox(e: CheckboxEvent, i: number) {
        const newTasks = tasks.map((task: Task, _i) => {
            return _i === i ? { ...task, isDone: e.target.checked } : task;
        });
        setTasks(newTasks);
    }

    return (
        <ul>
            {tasks.map((task, index) => (
                <li key={`todo-${index}`}>
                    <Checkbox
                        checked={task.isDone}
                        onChange={(e) => handleCheckBox(e, index)}
                    >
                        {task.isDone ? <s>{task.label}</s> : task.label}
                    </Checkbox>
                </li>
            ))}
        </ul>
    );
};
