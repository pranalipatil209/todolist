import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
import { getTodos } from "../redux/selectors";
import { Grid, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { AnimatedList } from 'react-animated-list';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import { addTodo } from "../redux/actions";

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

function Loading() {
  return <Grid>
    <List>
    <ListItem className="todo-card">
    <ListItemIcon>
      <HourglassEmptyIcon/>
    </ListItemIcon>
    <ListItemText primary="loading"></ListItemText>
    </ListItem>
    </List>
  </Grid>
}
const TodoList = ({ todos,addTodo}) => {

  const [loading, setLoading] = useState(true)

  // filter uncompleted
  let uncompleted = todos.filter((item, index) => {
    if (item.completed === false) return item
  })
  // sort by created date
  uncompleted.sort((a, b) => Date(a) - Date(b))

  //filter all completed jobs
  let completed = todos.filter((item, index) => {
    if (item.completed === true) return item
  })


  // sort by created date
  completed.sort((a, b) => new Date(a.date) - new Date(b.date))

  const todoList = uncompleted.reverse().concat(completed)

  // helper function to depict aysnc rest call
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      addTodo("test1")
      addTodo("test2")
      addTodo("test3")
    }, 2000);
    return () => clearTimeout(timer);
  }, []);



  return (
    loading == true ? <Loading /> : <Grid>
      <List >
        <AnimatedList animation={"grow"}>
          {todoList.map((todo, index) => {
            return <Todo key={`todo-${todo.id}`} todo={todo} />;
          })}
        </AnimatedList>
      </List>
    </Grid>
  )
};

const mapStateToProps = state => {
  const todos = getTodos(state);
  return { todos };
};
// export default TodoList;
export default connect(mapStateToProps,{addTodo})(TodoList);
