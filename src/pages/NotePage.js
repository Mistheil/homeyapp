import {
    Button,
} from "@mui/material";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NoteItemList from "./components/NoteItemList";
import "./NotePage.css";
import NoteAddDialog from './components/NoteAddDialog';

const client = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/posts',
});


const NotePage = () => {
    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState("");
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
                let response = await client.get('?_limit=5');
                setPosts(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchPost();
    }, []);

    // // Melakukan POST dengan Axios
    // const addPosts = async (title, body) => {
    //     try {
    //         let response = await client.post('', {
    //             title: title,
    //             body: body,
    //         });
    //         setPosts([response.data, ...posts]);
    //         setTitle('');
    //         setBody('');
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    // melakukan DELETE dengan Axios
    const deletePost = async (id) => {
        try {
            await client.delete(`${id}`);
            setPosts(
                posts.filter((post) => {
                    return post.id !== id;
                })
            );

        } catch (error) {
            console.log(error);
        }
    };


    return (
        <div className="notepage">

            <div className="post-card">
                <h2>Simpan catatan yang kamu inginkan!</h2>
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

            <Button variant="contained" size="large" className="form-button" onClick={openDialog}>Buat post</Button>

            <div className="posts-container">


                <h2>Post-Note List</h2>


                {posts &&
                    posts.filter(post => {
                        if (search === '') {
                            return post;
                        } else if (post.title.toLowerCase().includes(search.toLowerCase())) {
                            return post;
                        }
                    }).map((post) => (
                        <div className="single-post-container" key={post.id}>
                            {/* {post.id} */}
                            <NoteItemList
                                title={post.title}
                                body={post.body}
                            />

                            <Button variant="outlined" color="error" onClick={() => deletePost(post.id)}>Hapus</Button>
                        </div>
                    ))
                }


            </div>
            {isDialogOpen && (
                <NoteAddDialog
                    open={isDialogOpen}
                    onClose={closeDialog}
                    posts={posts}
                    setPosts={setPosts}
                />
            )}
            <p>...</p>
        </div >

    );
};

export default NotePage;
