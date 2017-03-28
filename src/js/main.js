// main css
import "../css/main.css";
// react
import React from "react";
// react dom
import ReactDOM from "react-dom";

// to do list
import TodoList from "./TodoList";

import store from './TodoStore';

// get app id from index.html and assign todolist to it
const app = document.getElementById("app");

// react dom render
// todolist component
// app which is the index.html
ReactDOM.render(<TodoList store={store} />, app);
