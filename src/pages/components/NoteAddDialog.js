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
  baseURL: 'https://jsonplaceholder.typicode.com/posts',
});

function NoteAddDialog({ open, onClose, posts, setPosts }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [alert, setAlert] = useState("");

  // Kontrol submission
  const handleSubmit = (e) => {
    e.preventDefault();
    addPosts(title, body);
    setTitle('');
    setBody('');
    setAlert("Data berhasil ditambahkan!");
  };

  // Melakukan POST dengan Axios
  const addPosts = async (title, body) => {
    try {
      let response = await client.post('', {
        title: title,
        body: body,
      });
      setPosts([response.data, ...posts]);
      setTitle('');
      setBody('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} >

      <DialogTitle>Add Note</DialogTitle>
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
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          name="body"
          label="Body"
          multiline
          rows={4}
          fullWidth
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <p>________________________________________________________________</p>
        <p>{alert}</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
        <Button onClick={handleSubmit}>Add</Button>
      </DialogActions>
      
    </Dialog>
  );
}

export default NoteAddDialog;
