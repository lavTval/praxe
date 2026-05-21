import { useReducer, useState } from "react";
import Task from "./components/Task";

interface Todo {
  id: number;
  name: string;
  completed: boolean;
}

let newId = 1;

const ACTIONS = {
  ADD_TODO: "add-todo",
  DELETE_TODO: "delete-todo",
};

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];

    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);
  }
}

function newTodo(name: string): Todo {
  return { id: newId++, name: name, completed: false };
}

export default function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [form, setForm] = useState("");

  function handleSubmit(e: React.SubmitEvent) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: form } });
    setForm("");
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm(e.target.value);
  }

  console.log(todos);

  return (
    <main className="min-h-screen flex justify-center items-center bg-linear-90 from-blue-400 to-purple-700">
      <div className="flex flex-col gap-2 border-3 border-blue-400 rounded-2xl p-3 bg-blue-200">

        <form onSubmit={handleSubmit} className="flex flex-col">
          <label htmlFor="task">Add task</label>
          <div className="flex gap-1.5">
            <input
              type="text"
              id="task"
              className="border border-blue-400"
              placeholder="Enter new task"
              value={form}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="text-gray-200 rounded-full px-2 py-0.5 bg-linear-90 from-blue-600 to-purple-600 hover:scale-105 transition-transform"
            >
              Submit
            </button>
          </div>
        </form>
        <div className="flex flex-col gap-2">
          {todos?.map((task: Todo) => {
            return (
              <Task
                id={task.id}
                name={task.name}
                completed={task.completed}
                onDelete={(id) =>
                  dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: id } })
                }
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}
