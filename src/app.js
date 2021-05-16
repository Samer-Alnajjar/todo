import React from "react";
import ToDo from "./component/todo/todo";
import NavBar from './component/todo/navbar';
import './app.css';
const App = () => {
  return (
    <>
      <NavBar />
      <ToDo />
    </>
  );
};


export default App;
