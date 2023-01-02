import React, {useEffect, useState} from 'react';
import ToDoItem from "./item/ToDoItem";
import ToDoField from "./ToDoField/ToDoField";

const Home = () => {
    const [darkToggle, setDarkToggle] = useState(() => {
        const darkToggle = localStorage.getItem("darkToggle");
        if (darkToggle) {
            return JSON.parse(darkToggle);
        } else {
            return false;
        }
    });

    const [toDos, setToDos] = useState(() => {
        const savedToDos = localStorage.getItem("toDos");
        if (savedToDos) {
            return JSON.parse(savedToDos);
        } else {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem("toDos", JSON.stringify(toDos));
        localStorage.setItem("darkToggle", JSON.stringify(darkToggle));
    }, [toDos, darkToggle]);

    const changeToDo = id => {
        const copy = [...toDos]
        const current = copy.find(t => t._id === id)
        current.isCompleted = !current.isCompleted
        setToDos(copy)
    }

    const removeToDo = id => setToDos([...toDos].filter(t => t._id !== id))

    return (
        <div className={
            `min-h-screen py-10
            ${darkToggle ? 'bg-zinc-900 text-white' : 'bg-white text-zinc-900'}`
        }>
            <div className="w-4/5 mx-auto">
                <div className="flex justify-center align-center">
                    <h1 className="text-2xl font-bold text-center mb-10 mr-3">ToDo App</h1>

                    <label className="toggleDarkBtn">
                        <input
                            checked={darkToggle}
                            type="checkbox"
                            onClick={() => setDarkToggle(!darkToggle)}
                        />
                        <span className="slideBtnTg round"></span>
                    </label>
                </div>

                <ToDoField
                    darkToggle={darkToggle}
                    setToDos={setToDos}
                />

                <>
                    {toDos?.length > 0 ? (
                        <div>
                            {
                                toDos.map(toDo => (
                                    <ToDoItem
                                        key={toDo._id}
                                        task={toDo}
                                        changeToDo = {changeToDo}
                                        removeToDo = {removeToDo}
                                        darkToggle = {darkToggle}
                                    />
                                ))
                            }
                        </div>
                    ) : (
                        <div>
                            No task found
                        </div>
                    )}
                </>

            </div>
        </div>
    );
};

export default Home;