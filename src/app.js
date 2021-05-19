import React from "react";
import ToDo from "./component/todo/todo";
import NavBar from './component/todo/navbar';
import PaginationProvider from "./component/context/pagination";
import './app.css';

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
