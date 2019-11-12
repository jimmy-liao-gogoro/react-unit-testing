import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Box, Button, TextField, Grid, Table, TableHead, TableBody, TableRow, TableCell,
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
    <Grid container>
      <Grid
        container
        justify="flex-start"
        alignItems="center"
      >
        <Box mr={3}>
          <TextField
            id="standard-basic"
            label="Item"
            margin="normal"
            value={pending}
            onChange={handlePendingChange}
          />
        </Box>
        <Button variant="contained" color="primary" onClick={handleAddClick}>
          Add To-Do Item
        </Button>
      </Grid>
      <Grid item sm={6}>
        <Table aria-label="To-Do Table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Completed</TableCell>
              <TableCell>Item</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todo.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.completed ? 'Done' : 'Not Yet'}</TableCell>
                <TableCell>{item.text}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Grid>
    </Grid>
  );
};
