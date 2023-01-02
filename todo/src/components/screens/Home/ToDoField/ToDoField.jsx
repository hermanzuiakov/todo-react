import React, {useState} from 'react';
import {MdOutlineAdd} from "react-icons/md";

const ToDoField = ({setToDos}) => {
    const [title, setTitle] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const addToDo = title => {
        if (title.length !== 0) {
            setToDos(prev => [
                {
                    _id: new Date(),
                    title,
                    isCompleted: false,
                },
                ...prev,
            ])
            setTitle('')
            setErrorMessage("")
            setSuccessMessage("Task added")
        } else {
            setErrorMessage("Input mustn't be empty!")
            setSuccessMessage("")
            return;
        }
    }

    return <div>
        <div className="flex justify-between items-center mb-4 rounded-2xl bg-zinc-800 p-5 w-full">
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
        </div>

        {errorMessage && (
            <div className="alert mb-4 text-red-400">
                {errorMessage}
            </div>
        )}

        {successMessage && (
            <div className="alert mb-4 text-green-400">
                {successMessage}
            </div>
        )}
    </div>;
};

export default ToDoField;