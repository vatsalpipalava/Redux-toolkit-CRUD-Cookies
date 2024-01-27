// Task.js
import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../action';
import CountrySelect from './CountrySelect';

import '../App.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';

const Task = () => {
    const dispatch = useDispatch();
    const fnameRef = useRef(null);
    const lnameRef = useRef(null);
    const emailRef = useRef(null);
    const numberRef = useRef(null);
    const [selectedOption, setSelectedOption] = useState('');
    const [hobbies, sethobbies] = useState([]);
    const [selectedGender, setSelectedGender] = useState('');
    const [selectedCountry, setSelectedCountry] = useState(null);

    function addNewTask() {
        const Fname = fnameRef.current.value.trim();
        const Lname = lnameRef.current.value.trim();
        const Email = emailRef.current.value.trim();
        const Number = numberRef.current.value.trim();
        if ((Fname !== '') || (Lname !== '')) {
            dispatch(
                addTodo({
                    id: new Date().getTime(),
                    fname: Fname,
                    lname: Lname,
                    email: Email,
                    number: Number,
                    option: selectedOption,
                    hobbies: hobbies,
                    gender: selectedGender,
                    country: selectedCountry,
                })
            );
            fnameRef.current.value = '';
            lnameRef.current.value = '';
            emailRef.current.value = '';
            numberRef.current.value = ''; 
            setSelectedOption('');
            sethobbies([]);
            setSelectedGender('');
            setSelectedCountry(null);
        }
    }

    const handleMultipleCheckboxChange = (value) => {
        const updatedCheckboxes = [...hobbies];
        const index = updatedCheckboxes.indexOf(value);

        if (index === -1) {
            updatedCheckboxes.push(value);
        } else {
            updatedCheckboxes.splice(index, 1);
        }

        sethobbies(updatedCheckboxes);

        
    };

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Concate Form
                        </Typography>
                        <Button href="/task-list" color="inherit">Show Data</Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <div className="App">
                <div className="form-container">
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { mt: 2, mr: 1, mb: 1, ml: 1, width: '350px' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <input id="filled-basic" className='textfield' placeholder='First Name' ref={fnameRef} label="First Name" />
                        <input id="filled-basic" className='textfield' placeholder='Last Name' ref={lnameRef} label="Last Name" />
                        <input id="filled-basic" className='textfield' placeholder='Email' ref={emailRef} label="Email" />
                        <input id="filled-basic" className='textfield' placeholder='Number' ref={numberRef} label="Number" />
                        {/* <TextField id="filled-basic" required className='textfield' label="Email" variant="filled" value={email} onChange={(e) => setemail(e.target.value)} /> */}
                        {/* <TextField id="filled-basic" required className='textfield' label="Number" variant="filled" value={number} onChange={(e) => setnumber(e.target.value)} /> */}


                        <select
                            value={selectedOption}
                            onChange={(e) => setSelectedOption(e.target.value)}
                        >
                            <option value="">Select an option</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            {/* Add more options as needed */}
                        </select>

                        <CountrySelect
                            value={selectedCountry}
                            onChange={(event, newValue) => setSelectedCountry(newValue)}
                        />

                        
                        <FormGroup className="form-group">
                            <FormControlLabel className='form-radio-label'
                                control={
                                    <input
                                        type="radio"
                                        value="Male"
                                        checked={selectedGender === 'Male'}
                                        onChange={() => setSelectedGender('Male')}
                                    />
                                }
                                label="Male"
                            />
                            <FormControlLabel className='form-radio-label'
                                control={
                                    <input
                                        type="radio"
                                        value="Female"
                                        checked={selectedGender === 'Female'}
                                        onChange={() => setSelectedGender('Female')}
                                    />
                                }
                                label="Female"
                            />
                        </FormGroup>

                        <FormGroup className="form-group">
                            <h4>Hobbies</h4>
                            <FormControlLabel className='form-label'
                                control={
                                    <label className='form-radio-label'>
                                        <input
                                            type="checkbox"
                                            value="Reading"
                                            checked={hobbies.includes('Reading')}
                                            onChange={() => handleMultipleCheckboxChange('Reading')}
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
                                            checked={hobbies.includes('Gaming')}
                                            onChange={() => handleMultipleCheckboxChange('Gaming')}
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
                                            checked={hobbies.includes('Traveling')}
                                            onChange={() => handleMultipleCheckboxChange('Traveling')}
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
                                            checked={hobbies.includes('Swimming')}
                                            onChange={() => handleMultipleCheckboxChange('Swimming')}
                                        />
                                        Swimming
                                    </label>
                                }
                            />
                        </FormGroup>

                    

                    </Box>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '720px' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <Button variant="contained" endIcon={<SendIcon />} color="success" onClick={addNewTask}>
                            Send
                        </Button>
                    </Box>
                </div>
            </div>
        </div >
    );
};

export default Task;


