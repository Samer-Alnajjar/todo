import React, {useContext} from "react";
import { If, Else, Then } from 'react-if';
import ToDo from "./component/todo/todo";
import NavBar from "./component/todo/navbar";
import "./app.css";
import PaginationProvider from "./component/context/pagination";

// import Auth from "./component/auth/auth.js";
import { LoginContext } from "./component/auth/context.js";

const App = () => {
  const loginContext = useContext(LoginContext);
  return (
    <>
      <NavBar />
      <If condition={loginContext.loggedIn}>
        <Then>
          <PaginationProvider>
            <ToDo />
          </PaginationProvider>
        </Then>
        <Else>
          <div></div>
        </Else>
      </If>
      {/* <EditLink />
      <DeleteLink /> */}
    </>
  );
};

export default App;
