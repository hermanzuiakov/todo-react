import React, {useState} from 'react';
import {MdOutlineAdd} from "react-icons/md";

const ToDoField = ({setToDos}) => {
    const [title, setTitle] = useState('');

    const addToDo = title => {
        setToDos(prev => [
            {
                _id: new Date(),
                title,
                isCompleted: false,
            },
            ...prev,
        ])
        setTitle('')
    }

    return <div className="flex justify-between items-center mb-4 rounded-2xl bg-zinc-800 p-5 w-full">
        <input
            type="text"
            id="taskField"
            onChange={e => setTitle(e.target.value)}
            value={title}
            onKeyPress={e => e.key === 'Enter' && addToDo(title)}
            className='bg-transparent w-full border-none outline-none'
            placeholder='Add a task'
        />

        <button
            onClick={
                () => {
                    addToDo(title)
                }
            }
        >
            <MdOutlineAdd
                className="text-white rounded-lg bg-pink-400"
                size={24}
            />
        </button>
    </div>;
};

export default ToDoField;