import {
    Button,
    Grid,
    Checkbox
} from "@mui/material";
import TodoAddDialog from './components/TodoAddDialog';
import "./TodoPage.css";
import { useState, useEffect } from "react";
import axios from "axios";

const client = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/todos',
});

function TodoPage() {
    const [todos, setTodos] = useState([]);
    const [search, setSearch] = useState("");
    // const [title, setTitle] = useState('');
    // const [completed, setCompleted] = useState(false);
    const [isDialogOpen, setIsDialogOpen] = useState(false);


    const openDialog = () => {
        setIsDialogOpen(true);
    };

    const closeDialog = () => {
        setIsDialogOpen(false);
    };

    // melakukan GET dengan Axios
    useEffect(() => {
        const fetchPost = async () => {
            try {
                let response = await client.get('?_limit=10');
                setTodos(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchPost();
    }, []);

    // melakukan DELETE dengan Axios
    const deletePost = async (id) => {
        try {
            await client.delete(`${id}`);
            setTodos(
                todos.filter((post) => {
                    return post.id !== id;
                })
            );
        } catch (error) {
            console.log(error);
        }
    };

    const onUpdateTodo = (todo) => {
        const todoItemIndex = todos.findIndex((x) => x.id === todo.id);
        const newTodos = [...todos];

        const newTodo = newTodos[todoItemIndex];
        newTodo.completed = !newTodo.completed;
        newTodos[todoItemIndex] = newTodo;
        setTodos(newTodos);
    };



    return (
        <div className="todo-page-container">
            <div className="post-card">
                <h2>To-do List yang harus dilakukan adalah...</h2>
            </div>

            <div className="post-card">
                <input
                    className="search-bar"
                    type="text"
                    placeholder="search..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>


            <div className="todo-button">
                <Button variant="contained" size="large" onClick={openDialog}>Tambah List</Button>
            </div>
            <div className="todo-list-container">
                <Grid container spacing={3} className="todo-titles">
                    <Grid item xs={9}>
                        <h2>Todo</h2>
                    </Grid>
                    <Grid item xs={1}>
                        <h2>Checked</h2>
                    </Grid>
                    <Grid item xs={2}>
                        <h2>opsi</h2>
                    </Grid>
                </Grid>
                <div className="todo">

                    {todos &&
                        todos.filter(todo => {
                            if (search === '') {
                                return todo;
                            } else if (todo.title.toLowerCase().includes(search.toLowerCase())) {
                                return todo;
                            }
                        }).map((todo) => (
                            <Grid container spacing={3} key={todo.id}>
                                <Grid item xs={9}>
                                    <h3>{todo.title}</h3>
                                </Grid>
                                <Grid item xs={1}>
                                    <Checkbox
                                        checked={todo.completed}
                                        onChange={() => onUpdateTodo(todo)}
                                        sx={{ '&.MuiSvgIcon-root': { fontSize: 28 } }}
                                    />
                                </Grid>
                                <Grid item xs={2}>
                                    <Button variant="outlined" color="error" onClick={() => deletePost(todo.id)}>Hapus</Button>
                                </Grid>
                            </Grid>
                        ))
                    }



                </div>
                {isDialogOpen && (
                    <TodoAddDialog
                        open={isDialogOpen}
                        onClose={closeDialog}
                        todos={todos}
                        setTodos={setTodos}
                    />
                )}
            </div>
        </div>
    );
}

export default TodoPage;
