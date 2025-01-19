import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableTheme } from "../../theme/theme";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import { TodoContext } from "../../context/TodoContext/TodoContext";
import { useContext } from "react";
import {
  Box,
  Button,
  IconButton,
  ThemeProvider,
  Typography,
} from "@mui/material";

const TodoList = () => {
  const { todos, setTodos } = useContext(TodoContext);

  const navigate = useNavigate();

  const deleteTask = (id) => {
    const filteredData = todos.filter((todo) => todo.id !== id);
    setTodos(filteredData);
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  return (
    <Box
      sx={{
        mt: 10,
        display: "flex",
        flexDirection: "column",
        gap: 5,
        padding: "0 50px",
      }}
    >
      <Typography variant="h1">TODO List APP</Typography>
      <Button
        onClick={() => navigate("/form")}
        variant="outlined"
        sx={{ alignSelf: "flex-end" }}
      >
        add task
      </Button>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <ThemeProvider theme={TableTheme}>
            <TableHead>
              <TableRow>
                <TableCell align="center">
                  <Typography>#</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography>Task Name</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography>Status</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography>Edit</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography>Delete</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
          </ThemeProvider>
          <TableBody>
            {todos.map((todo) => (
              <TableRow
                key={todo.id}
                sx={
                  todo.status == "in progress"
                    ? {
                        background: "rgba(255, 145, 0, 0.79);",
                      }
                    : todo.status == "completed"
                    ? {
                        borderRadius: "5px",
                        background: " rgba(0, 128, 0, 0.8);",
                      }
                    : {}
                }
              >
                <TableCell align="center">
                  <Typography>{todo.id}</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography>{todo.name}</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography>{todo.status}</Typography>
                </TableCell>
                <TableCell align="center">
                  <IconButton
                    onClick={() => navigate(`/form/${todo.id}`)}
                    aria-label="edit"
                    color="inherit"
                  >
                    <EditIcon />
                  </IconButton>
                </TableCell>
                <TableCell align="center">
                  <IconButton
                    onClick={() => deleteTask(todo.id)}
                    aria-label="delete"
                    color="error"
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
export default TodoList;
