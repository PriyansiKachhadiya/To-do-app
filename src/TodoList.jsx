import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
    const [todos, setTodos] = useState([{ task: "Eat", id: uuidv4(), isDone: false }]);
    const [newTodo, setNewTodo] = useState("");


    const addNewTask = () => {
        setTodos((prevTodos) => [
            ...prevTodos,
            { task: newTodo, id: uuidv4(), isDone: false }
        ]);
        setNewTodo("");
    };

    const updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    const markasDone = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                if (todo.id === id) {
                    console.log(todo);
                    return { ...todo, isDone: !todo.isDone }

                }
                else {
                    return todo;
                }
            })
        )

    }

    const markDoneAll = () => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                return { ...todo, isDone: !todo.isDone }
            })
        )
    }

    const deleteTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    const uppercaseAll = () => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => ({
                ...todo,
                task: todo.task.toUpperCase()
            }))
        );
    };

    const uppercaseOne = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, task: todo.task.toUpperCase() };
                } else {
                    return todo;
                }
            })
        );
    };



    return (
        <div className="flex flex-col justify-center w-full items-center">
            <h1 className="text-3xl font-bold mb-8 ">Task List 2024</h1>
            <div className="flex flex-row w-1/2 justify-between">
                <input
                  className="w-3/4 px-4 py-2.5 rounded-3xl"
                    type="text"
                    value={newTodo}
                    placeholder="Add a task"
                    onChange={updateTodoValue}
                />

                <button className="font-bold px-4 py-2.5 rounded-3xl bg-[#2e236c]" onClick={addNewTask}>Add Task</button>
            </div>
             
            
            <ul className="mt-8 mb-8 ">


                {
                    todos.map((todo) => (
                        <li className="flex justify-between items-center bg-[#2E236C95] rounded-3xl px-16 mb-4 " key={todo.id}>

                            
                            {todo.isDone== true ?<span>&#10004;</span>:null}
                            <span className="text-lg font-semibold mr-4 text-[#C8ACD6] w-3/4" style={todo.isDone ? { textDecoration: "line-through" } : {}}>{todo.task}</span>

                            


                            <button className="mx-4 font-semibold text-[black]]" onClick={() => deleteTodo(todo.id)}>Delete</button>
                            <button className="font-semibold mx-4 text-[#C8ACD6]" onClick={() => markasDone(todo.id)}>Done</button>
                            <br /><br />
                        </li>
                    ))}
            </ul>
            <button className="font-semibold   px-4 py-2  rounded-3xl bg-[#2e236c] " onClick={markDoneAll}>Done all task</button>
        </div>
    );
}
