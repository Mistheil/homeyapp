import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
  } from "@mui/material";
  import axios from "axios";
  import React, { useState } from "react";
  
  const client = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/todos',
  });
  
  function TodoAddDialog({ open, onClose, todos, setTodos }) {
    const [title, setTitle] = useState("");
    const [completed, setCompleted] = useState(false);
    const [alert, setAlert] = useState("");
  
    // Kontrol submission
    const handleSubmit = (e) => {
      e.preventDefault();
      addTodos(title, completed);
      setTitle('');
      setCompleted(false);  //Jaga jaga
      setAlert("Data berhasil ditambahkan!");
    };
  
    // Melakukan POST dengan Axios
    const addTodos = async (title, completed) => {
      try {
        let response = await client.post('', {
          title: title,
          completed: completed,
        });
        setTodos([response.data, ...todos]);
        setTitle('');
        setCompleted(false);
      } catch (error) {
        console.log(error);
      }
    };
  
    return (
      <Dialog open={open} onClose={onClose} >
  
        <DialogTitle>Add a To-do List</DialogTitle>
        <DialogContent
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            padding: "8px 40px",
          }}
        >
          
          <TextField
            name="title"
            label="To-do"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {/* <TextField
            name="completed"
            label="Completed"
            multiline
            rows={4}
            fullWidth
            value={completed}
            onChange={(e) => setCompleted(e.target.value)}
          />
          <p>________________________________________________________________</p> */}
          <p>{alert}</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Close</Button>
          <Button onClick={handleSubmit}>Add</Button>
        </DialogActions>
        
      </Dialog>
    );
  }
  
  export default TodoAddDialog;
  