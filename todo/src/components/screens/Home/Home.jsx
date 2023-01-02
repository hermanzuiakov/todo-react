import React, {useState} from 'react';
import ToDoItem from "./item/ToDoItem";
import ToDoField from "./ToDoField/ToDoField";

const data = [
    {
        _id: "wesdssadf",
        title: 'Finish essay',
        isCompleted: true
    },
    {
        _id: "wddffdadf",
        title: 'Finish essay',
        isCompleted: false
    },
    {
        _id: "wedsggggdadf",
        title: 'Finish essay',
        isCompleted: true
    }
]

const Home = () => {
    const [toDos, setToDos] = useState(data);

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