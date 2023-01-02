import React, {useEffect, useState} from 'react';
import ToDoItem from "./item/ToDoItem";
import ToDoField from "./ToDoField/ToDoField";

const Home = () => {

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
    }, [toDos]);

    const changeToDo = id => {
        const copy = [...toDos]
        const current = copy.find(t => t._id === id)
        current.isCompleted = !current.isCompleted
        setToDos(copy)
    }

    const removeToDo = id => setToDos([...toDos].filter(t => t._id !== id))

    return (
        <div className="w-4/5 mx-auto">
            <h1 className="text-2xl font-bold text-center mb-10">ToDo App</h1>

            <ToDoField setToDos={setToDos}/>

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
    );
};

export default Home;