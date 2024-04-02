import { useState, useEffect } from "react";
import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;

function WorkingWithArrays() {
    const [errorMessage, setErrorMessage] = useState(null);
    const API = `${API_BASE}/a5/todos`;
    const [todo, setTodo] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-09-09",
        completed: false
    });
    const [todos, setTodos] = useState<any[]>([]);
    const postTodo = async () => {
        const response = await axios.post(API, todo);
        setTodos([...todos, response.data]);
    };
    const fetchTodos = async () => {
        const response = await axios.get(API);
        setTodos(response.data);
    };
    useEffect(() => {
        fetchTodos();
    }, []);
    const removeTodo = async (todo: any) => {
        const response = await axios
            .get(`${API}/${todo.id}/delete`);
        setTodos(response.data);
    };
    const createTodo = async () => {
        const response = await axios.get(`${API}/create`);
        setTodos(response.data);
    };
    const fetchTodoById = async (id: number) => {
        const response = await axios.get(`${API}/${id}`);
        setTodo(response.data);
    };
    const updateTitle = async () => {
        const response = await axios.get(`${API}/${todo.id}/title/${todo.title}`);
        setTodos(response.data);
    };
    const deleteTodo = async (todo: any) => {
        try {
            const response = await axios.delete(`${API}/${todo.id}`);
            setTodos(todos.filter((t) => t.id !== todo.id));
        } catch (error: any) {
            console.log(error);
            setErrorMessage(error.response.data.message);
        }
    };
    const updateTodo = async () => {
        try {
            const response = await axios.put(`${API}/${todo.id}`, todo);
            setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
        } catch (error: any) {
            console.log(error);
            setErrorMessage(error.response.data.message);
        }
    };

    return (
        <div>
            <h3>Working with Arrays</h3>
            {errorMessage && (
                <div className="alert alert-danger mb-2 mt-2">
                    {errorMessage}
                </div>
            )}
            <h4>Retrieving Arrays</h4>
            <a className="btn btn-primary" href={API}>
                Get Todos
            </a>
            <h4>Retrieving an Item from an Array by ID</h4>
            <input value={todo.id}
                onChange={(e) => setTodo({
                    ...todo,
                    id: parseInt(e.target.value)
                })} />
            <input type="text" value={todo.title}
                onChange={(e) => setTodo({
                    ...todo, title: e.target.value
                })} />
            <button className="btn btn-primary" onClick={updateTitle} >
                Update Title
            </button>
            <h3>Updating an Item in an Array</h3>
            <a className="btn btn-primary" href={`${API}/${todo.id}/title/${todo.title}`} >
                Update Title to {todo.title}
            </a><br />
            <textarea value={todo.description}
                onChange={(e) => setTodo({
                    ...todo,
                    description: e.target.value
                })} /><br />
            <input value={todo.due} type="date"
                onChange={(e) => setTodo({
                    ...todo, due: e.target.value
                })} /><br />
            <label>
                <input checked={todo.completed} type="checkbox"
                    onChange={(e) => setTodo({
                        ...todo, completed: e.target.checked
                    })} />
                Completed
            </label><br />
            <button className="btn btn-primary" onClick={postTodo}> Post Todo </button><br />
            <button className="btn btn-primary" onClick={updateTodo}>
                Update Todo
            </button><br />
            <a className="btn btn-primary" href={`${API}/${todo.id}`}>
                Get Todo by ID
            </a><br />
            <h3>Filtering Array Items</h3>
            <a className="btn btn-primary" href={`${API}?completed=true`}>
                Get Completed Todos
            </a>
            <h3>Creating new Items in an Array</h3>
            <a className="btn btn-primary" href={`${API}/create`}>
                Create Todo
            </a>
            <h3>Deleting from an Array</h3>
            <a className="btn btn-danger" href={`${API}/${todo.id}/delete`}>
                Delete Todo with ID = {todo.id}
            </a>

            <h3>Update If Todo Completed</h3>
            <a href={`${API}/${todo.id}/completed/${todo.completed}`}>
                Update Completed
            </a>
            <input type="checkbox" checked={todo.completed}
                onChange={(e) => setTodo({
                    ...todo, completed: e.target.value ? true : false
                })} />

            <h3>Update Todo Description</h3>
            <a href={`${API}/${todo.id}/description/${todo.description}`}>
                Update Description
            </a>
            <input type="textarea" value={todo.description}
                onChange={(e) => setTodo({
                    ...todo, description: e.target.value
                })} />
            <br />

            <button className="btn btn-primary" onClick={createTodo} >
                Create Todo
            </button>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <input checked={todo.completed}
                            type="checkbox" readOnly />
                        {todo.title}
                        <p>{todo.description}</p>
                        <p>{todo.due}</p>
                        <button className="btn btn-danger m-1" onClick={() => removeTodo(todo)} >
                            Remove
                        </button>
                        <button className="btn btn-warning m-1" onClick={() => fetchTodoById(todo.id)} >
                            Edit
                        </button>
                        <button onClick={() => deleteTodo(todo)}
                            className="btn btn-danger float-end ms-2">
                            Delete With Post Request
                        </button>
                    </li>
                ))}
            </ul>


        </div>
    );
}
export default WorkingWithArrays;