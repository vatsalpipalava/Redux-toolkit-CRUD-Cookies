// EditDialog.js
import React, { useRef, useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import CountrySelect from './CountrySelect';

const EditDialog = ({ open, handleClose, task, handleEdit }) => {
    const [editedTask, setEditedTask] = useState({ ...task });
    const fnameRef = useRef(null);
    const lnameRef = useRef(null);
    const emailRef = useRef(null);
    const numberRef = useRef(null);

    const handleCheckboxChange = (hobby) => {
        const updatedHobbies = editedTask.hobbies ? [...editedTask.hobbies] : [];
        const index = updatedHobbies.indexOf(hobby);
    
        if (index === -1) {
            updatedHobbies.push(hobby);
        } else {
            updatedHobbies.splice(index, 1);
        }
    
        setEditedTask((prevTask) => ({ ...prevTask, hobbies: updatedHobbies }));
    };

    useEffect(() => {
        setEditedTask({ ...task });
    }, [open, task]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedTask((prevTask) => ({ ...prevTask, [name]: value }));
    };

    const handleSave = () => {
        handleEdit(editedTask);
        handleClose();
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Edit Task</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Edit the fields as needed.
                </DialogContentText>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { mt: 2, mr: 1, mb: 1, ml: 1, width: '350px' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <input className='textfield'
                        type="text"
                        name="fname"
                        value={editedTask.fname}
                        onChange={handleInputChange}
                        ref={fnameRef}
                        placeholder="First Name"
                    />
                    <input className='textfield'
                        type="text"
                        name="lname"
                        value={editedTask.lname}
                        onChange={handleInputChange}
                        ref={lnameRef}
                        placeholder="Last Name"
                    />
                    <input className='textfield'
                        type="text"
                        name="email"
                        value={editedTask.email}
                        onChange={handleInputChange}
                        ref={emailRef}
                        placeholder="Email"
                    />
                    <input className='textfield'
                        type="text"
                        name="number"
                        value={editedTask.number}
                        onChange={handleInputChange}
                        ref={numberRef}
                        placeholder="Number"
                    />

                    <select
                        value={editedTask.option}
                        onChange={(e) => setEditedTask({ ...editedTask, option: e.target.value })}
                    >
                        <option value="">Select an option</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        {/* Add more options as needed */}
                    </select>

                    <CountrySelect
                        value={editedTask.country}
                        onChange={(event, newValue) => setEditedTask({ ...editedTask, country: newValue })}
                    />


                    <FormGroup className="form-group">
                        <FormControlLabel className='form-radio-label'
                            control={
                                <input
                                    type="radio"
                                    value="Male"
                                    checked={editedTask.gender === 'Male'}
                                    onChange={() => setEditedTask({ ...editedTask, gender: 'Male' })}
                                />
                            }
                            label="Male"
                        />
                        <FormControlLabel className='form-radio-label'
                            control={
                                <input
                                    type="radio"
                                    value="Female"
                                    checked={editedTask.gender === 'Female'}
                                    onChange={() => setEditedTask({ ...editedTask, gender: 'Female' })}
                                />
                            }
                            label="Female"
                        />
                    </FormGroup>

                    {/* <FormGroup className="form-group">
                            <h4>Hobbies</h4>
                            <FormControlLabel className='form-label'
                                control={
                                    <label className='form-radio-label'>
                                        <input
                                            type="checkbox"
                                            value="Reading"
                                            checked={editedTask.hobbies.includes('Reading')}
                                            // onChange={() => handleMultipleCheckboxChange('Reading')}
                                            // onChange={() => handleMultipleCheckboxChange('Reading')}
                                        />
                                        Reading
                                    </label>
                                }
                            />
                            <FormControlLabel
                                control={
                                    <label className='form-radio-label'>
                                        <input
                                            type="checkbox"
                                            value="Gaming"
                                            checked={editedTask.hobbies.includes('Gaming')}
                                            // onChange={() => handleMultipleCheckboxChange('Gaming')}
                                            // onChange={() => handleMultipleCheckboxChange('Reading')}
                                        />
                                        Gaming
                                    </label>
                                }
                            />
                            <FormControlLabel
                                control={
                                    <label className='form-radio-label'>
                                        <input
                                            type="checkbox"
                                            value="Traveling"
                                            checked={editedTask.hobbies.includes('Traveling')}
                                            // onChange={() => handleMultipleCheckboxChange('Traveling')}
                                            // onChange={() => handleMultipleCheckboxChange('Reading')}
                                        />
                                        Traveling
                                    </label>
                                }
                            />
                            <FormControlLabel
                                control={
                                    <label className='form-radio-label'>
                                        <input
                                            type="checkbox"
                                            value="Swimming"
                                            checked={editedTask.hobbies.includes('Swimming')}
                                            // onChange={() => handleMultipleCheckboxChange('Swimming')}
                                            // onChange={() => handleMultipleCheckboxChange('Reading')}
                                        />
                                        Swimming
                                    </label>
                                }
                            />
                        </FormGroup> */}

                    <FormGroup className="form-group">
                        <h4>Hobbies</h4>
                        {['Reading', 'Gaming', 'Traveling', 'Swimming'].map(hobby => (
                            <FormControlLabel className='form-label' key={hobby}
                                control={
                                    <label className='form-radio-label'>
                                        <input
                                            type="checkbox"
                                            value={hobby}
                                            checked={editedTask.hobbies && editedTask.hobbies.includes(hobby)}
                                            onChange={() => handleCheckboxChange(hobby)}
                                        />
                                        {hobby}
                                    </label>
                                }
                            />
                        ))}
                    </FormGroup>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleSave}>Save</Button>
            </DialogActions>
        </Dialog>
    );
};

export default EditDialog;
