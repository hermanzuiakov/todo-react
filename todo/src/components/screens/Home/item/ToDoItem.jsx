import React from 'react';
import CheckBox from "./CheckBox";
import { BsTrash } from 'react-icons/bs';

const ToDoItem = ({task, changeToDo, removeToDo, darkToggle}) => {
    return (
        <div className={`
        ${darkToggle ? 'bg-zinc-800' : 'bg-indigo-50'}
        flex justify-between items-center mb-4 rounded-2xl p-5 w-full`}>
            <button className="flex items-center" onClick={() => changeToDo(task._id)}>
                <CheckBox
                    darkToggle={darkToggle}
                    isCompleted={task.isCompleted}
                />
                <span className={`${task.isCompleted ? 'line-through' : ''}`}>
                    {task.title}
                </span>
            </button>

            <button onClick={() => removeToDo(task._id)}>
                <BsTrash
                    size={22}
                    className={`
                    ${darkToggle ? 'text-gray-500 hover:text-white' : 'text-gray-600 hover:text-indigo-400'}
                    transition-colors easy-in-out duration-300`}
                />
            </button>
        </div>
    );
};

export default ToDoItem;