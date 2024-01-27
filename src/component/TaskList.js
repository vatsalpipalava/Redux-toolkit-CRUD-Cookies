// TaskList.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, editTodo } from '../action';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import EditDialog from './EditDialog';


const TaskList = () => {

  const [editOpen, setEditOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleEdit = (task) => {
    dispatch(editTodo(task.id, task));
    setEditOpen(false);
  };

  const openEditDialog = (task) => {
    setSelectedTask(task);
    setEditOpen(true);
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Data Display
            </Typography>
            <Button href="/" color="inherit">Add Data</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <div className="display-main">
        <TableContainer className="table-container" component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={{ width: '10%' }}>First Name</TableCell>
                <TableCell style={{ width: '10%' }}>Last Name</TableCell>
                <TableCell style={{ width: '14%' }}>Email</TableCell>
                <TableCell style={{ width: '9%' }}>Number</TableCell>
                <TableCell style={{ width: '9%' }}>Option</TableCell>
                <TableCell style={{ width: '13%' }}>Country</TableCell>
                <TableCell style={{ width: '4%' }}>Gender</TableCell>
                <TableCell style={{ width: '22%' }}>Hobbies</TableCell>
                <TableCell style={{ width: '4%' }}>Edit</TableCell>
                <TableCell style={{ width: '4%' }}>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tasks.map((task) => (
                <TableRow key={task.id}>
                  <TableCell>
                    {task.fname}
                  </TableCell>
                  <TableCell>
                    {task.lname}
                  </TableCell>
                  <TableCell>
                    {task.email}
                  </TableCell>
                  <TableCell>
                    {task.number}
                  </TableCell>
                  <TableCell>
                    {task.option}
                  </TableCell>
                  <TableCell>
                    {task.country ? task.country.label : 'Not specified'}
                  </TableCell>
                  <TableCell>
                    {task.gender}
                  </TableCell>
                  <TableCell>
                    {task.hobbies.join(', ')}
                  </TableCell>
                  <TableCell>
                    <Button variant="contained" onClick={() => openEditDialog(task)}>
                      Edit
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button variant="contained" color="error" onClick={() => handleDelete(task.id)}>
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <EditDialog
        open={editOpen}
        handleClose={() => setEditOpen(false)}
        task={selectedTask}
        handleEdit={handleEdit}
      />
    </div >
  );
};

export default TaskList;

