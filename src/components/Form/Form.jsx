import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  OutlinedInput,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useState, useContext } from "react";
import { TodoContext } from "../../context/TodoContext/TodoContext";
import { useNavigate, useParams } from "react-router-dom";

const Form = () => {
  const params = useParams();
  const { todos, setTodos } = useContext(TodoContext);
  const navigate = useNavigate();
  const [task, setTask] = useState({ name: "", status: "" });

  const addTask = (e) => {
    e.preventDefault();

    const newTask = {
      name: task.name,
      status: params.id ? task.status : "todo",
      id: params.id ?? Date.now(),
    };

    const idx = todos.findIndex((todo) => todo.id == params.id);

    if (idx !== -1) {
      setTodos((prevTodos) => {
        prevTodos[idx] = newTask;
        localStorage.setItem("todos", JSON.stringify(todos));
        return prevTodos;
      });
    } else {
      setTodos((prevTodos) => [...prevTodos, newTask]);
    }

    navigate("/");
  };

  return (
    <Box
      onSubmit={(e) => addTask(e)}
      component="form"
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        p: "50px 100px",
        gap: "20px",
      }}
    >
      <FormControl>
        <InputLabel htmlFor="taskName">Task Name</InputLabel>
        <OutlinedInput
          required
          autoComplete="off"
          aria-label="task-name"
          label="Task Name"
          id="taskName"
          name="name"
          onChange={(e) => setTask({ ...task, name: e.target.value })}
        />
      </FormControl>
      {params.id ? (
        <FormControl>
          <FormLabel id="taskStatus">Status</FormLabel>
          <RadioGroup
            onChange={(e) => setTask({ ...task, status: e.target.value })}
            row
            aria-label="task-status"
            name="taskStatus"
          >
            <FormControlLabel
              required
              value="in progress"
              control={<Radio size="small" />}
              label="In Progress"
            />
            <FormControlLabel
              required
              value="completed"
              control={<Radio size="small" />}
              label="Completed"
            />
            <FormControlLabel
              required
              value="todo"
              control={<Radio size="small" />}
              label="Todo"
            />
          </RadioGroup>
        </FormControl>
      ) : (
        ""
      )}

      <Button
        size="large"
        variant="contained"
        color={params.id ? "secondary" : "success"}
        type="submit"
        sx={{ letterSpacing: "1px" }}
      >
        {params.id ? "edit task" : "create task"}
      </Button>
    </Box>
  );
};

export default Form;
