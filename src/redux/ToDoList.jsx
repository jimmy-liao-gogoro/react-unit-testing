import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Paper, Button, TextField, Grid, Table, TableHead, TableBody, TableRow, TableCell,
} from '@material-ui/core';

import { addTodo } from './actions';

export default () => {
  const todo = useSelector(((state) => state));
  const dispatch = useDispatch();
  const addTodoAction = (text) => dispatch(addTodo(text));

  const [pending, setPending] = useState('');

  const handlePendingChange = ({ currentTarget: { value = '' } }) => {
    setPending(value);
  };

  const handleAddClick = () => {
    addTodoAction(pending);
  };

  return (
    <Paper>
      <Grid
        container
        justify="flex-start"
        alignItems="center"
      >
        <TextField
          id="standard-basic"
          label="Standard"
          margin="normal"
          value={pending}
          onChange={handlePendingChange}
        />
        <Button variant="contained" color="primary" onClick={handleAddClick}>
          Add To-Do Item
        </Button>
      </Grid>
      <Table aria-label="To-Do Table">
        <TableHead>
          <TableRow>
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">Completed</TableCell>
            <TableCell align="right">Item</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {todo.map((item) => (
            <TableRow key={item.id}>
              <TableCell align="right">{item.id}</TableCell>
              <TableCell align="right">{item.completed ? 'Done' : 'Not Yet'}</TableCell>
              <TableCell align="right">{item.text}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};
