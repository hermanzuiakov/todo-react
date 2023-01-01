import React, {useState} from 'react';

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

    function getTitle() {
        const title = document.getElementById('taskField').value;
        addToDo(title);
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
    </div>;
};

export default ToDoField;