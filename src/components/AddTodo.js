import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";
import { Button, IconButton, Grid, TextField, makeStyles } from "@material-ui/core"
import AddIcon from '@material-ui/icons/Add';
import theme from "../theme"


const useStyles = makeStyles((theme) => ({
  AddToList: {
    color: "black",
  },

}));

function AddTodo(props) {

  const [input, setInput] = useState("");

  function handleAddTodo() {
    if (input === "" || input.length < 1) {
      alert("item should be minimum 1 character")
      return;
    }
    props.addTodo(input);
    setInput("")
  }

  function updateInput(value) {
    setInput(value)
  }
  return (
    <Grid>

      <IconButton color="primary" aria-label="delete" onClick={handleAddTodo}>
        <AddIcon />
      </IconButton>
      <TextField
        id="standard-basic"
        label="Add to list"
        color="primary"
        onChange={e => updateInput(e.target.value)}
        onKeyPress={e => {
          if (e.key === 'Enter') {
            handleAddTodo()
          }
        }}
        value={input}>

      </TextField>

    </Grid>
  );
}

export default connect(
  null,
  { addTodo }
)(AddTodo);
