import React from "react";
import ToDo from "./component/todo/todo";
import NavBar from './component/todo/navbar';
import './app.css';
import PaginationProvider from "./component/context/pagination";

const App = () => {
  return (
    <>
      <NavBar />
        <PaginationProvider>
          <ToDo />
        </PaginationProvider>
    </>
  );
};


export default App;
