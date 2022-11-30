import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

import WelcomePage from "./pages/WelcomePage";
import TodoPage from "./pages/TodoPage";
import NotePage from "./pages/NotePage";
import AboutPage from "./pages/AboutPage";

import { BiHomeSmile } from "react-icons/bi"; //logo app
import { BiNotepad } from "react-icons/bi"; // todolist
import { FaRegStickyNote } from "react-icons/fa"; //note
import { BsFillQuestionDiamondFill } from "react-icons/bs";
import { RiChatSmileLine } from "react-icons/ri";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <div className="appHeader">
            <BiHomeSmile className="icon" />
            <h2 id="titleHeader">Homey : To-dos and Notes</h2>
            <RiChatSmileLine className="icon"/>
          </div>
        </header>

        <Routes>
          <Route path='/'      element={<WelcomePage/>} />
          <Route path='/todo'  element={<TodoPage/>} />
          <Route path='/note'  element={<NotePage/>} />
          <Route path='/about' element={<AboutPage/>} />
        </Routes>

      </div>
      <footer>
        <NavLink to="/todo" className="iconWrapper">
          <BiNotepad className="icon" />
          To-Do
        </NavLink>
        <NavLink to="/note" className="iconWrapper">
          <FaRegStickyNote className="icon" />
          Notes
        </NavLink>
        <NavLink to="/about" className="iconWrapper">
          <BsFillQuestionDiamondFill className="icon" />
          About
        </NavLink>
      </footer>
    </BrowserRouter>
  );
}

export default App;
