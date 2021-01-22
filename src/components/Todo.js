import React from "react";
import { connect } from "react-redux";
import { toggleTodo, removeTodo, addTodo } from "../redux/actions";
import { IconButton, Checkbox, ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction, makeStyles } from "@material-ui/core"
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import theme from "./../theme"

const useStyles = makeStyles((theme) => ({
  ListItemText: {
    color: "black",
  },
  ListItemCheckbox: {
    color: "black",
  },
  root: {
    width: '100%',
    maxWidth: 360,
  },
}));

const Todo = ({ todo, toggleTodo, removeTodo }) => {

  const classes = useStyles(theme);

  return (

    <ListItem className="todo-card">

      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={Boolean(todo.completed)}
          tabIndex={-1}
          inputProps={{ 'aria-labelledby': todo.id }}
          onChange={() => toggleTodo(todo)}
          className={classes.ListItemCheckbox}
        />
        <ListItemText id={todo.id} className={classes.ListItemText} primary={todo.content} secondary={todo.date.toString()} style={{textDecoration:Boolean(todo.completed) ? "line-through":"none"}}/>
        <ListItemSecondaryAction className="trash-icon">
          <IconButton edge="end" aria-label="delete"  color="secondary" onClick={() => removeTodo(todo.id)}>
            <DeleteForeverIcon />
          </IconButton>
        </ListItemSecondaryAction>

      </ListItemIcon>
    </ListItem>
  );

}
// export default Todo;
export default connect(
  null,
  { toggleTodo, removeTodo }
)(Todo);
