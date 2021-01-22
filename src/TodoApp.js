import React from "react";
import AddTodo from "./components/AddTodo";
import { AppBar, Toolbar, IconButton, Typography, Container, Grid } from "@material-ui/core"
import "./styles.css";
import TodoList from "./components/TodoList";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import theme from "./theme"
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';


const styles = theme => ({
  root: {
    padding: theme.spacing(0),
    [theme.breakpoints.down('sm')]: {
      backgroundColor: theme.palette.secondary.main,
    },
    [theme.breakpoints.up('md')]: {
      backgroundColor: theme.palette.primary.main,
    },
  },
  totoView: {
    [theme.breakpoints.down('sm')]: {
      maxWidth: "200px",
    },
    [theme.breakpoints.down('up')]: {
      maxWidth: "500px",
    },
  }
});

const useStyles = makeStyles((theme) => ({
  todoView: {
    [theme.breakpoints.down('sm')]: {
      maxWidth: "100%",
      backgroundColor: "#00000"
    },
    [theme.breakpoints.down('up')]: {
      maxWidth: "500px",
      backgroundColor: "#00000"
    },
  }
}));

export default function TodoApp() {
  const classes = useStyles()
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  console.log("matches", matches)
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar style={{ backgroundColor: "#EB5757" }}>
          <IconButton edge="start" color="inherit" aria-label="menu">
          </IconButton>
          <Typography variant="h6">Tinylist</Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.todoView}  >
            <AddTodo></AddTodo>
            <TodoList></TodoList>
          </Container>
    </ThemeProvider>
  );
}
