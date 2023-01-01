import React from 'react';
import CheckBox from "./CheckBox";
import { BsTrash } from 'react-icons/bs';

const ToDoItem = ({task, changeToDo, removeToDo}) => {
    return (
        <div className="flex justify-between items-center mb-4 rounded-2xl bg-zinc-800 p-5 w-full">
            <button className="flex items-center" onClick={() => changeToDo(task._id)}>
                <CheckBox isCompleted={task.isCompleted} />
                <span className={`${task.isCompleted ? 'line-through' : ''}`}>
                    {task.title}
                </span>
            </button>

            <button onClick={() => removeToDo(task._id)}>
                <BsTrash
                    size={22}
                    className="text-gray-500 hover:text-white transition-colors easy-in-out duration-300"
                />
            </button>
        </div>
    );
};

export default ToDoItem;