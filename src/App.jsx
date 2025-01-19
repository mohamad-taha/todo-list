import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import TodoForm from "./pages/Form";
import { TodoProvider } from "./context/TodoContext/TodoContext";
import "./App.css";

const App = () => {
  return (
    <>
      <TodoProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form/:id?" element={<TodoForm />} />
        </Routes>
      </TodoProvider>
    </>
  );
};

export default App;
