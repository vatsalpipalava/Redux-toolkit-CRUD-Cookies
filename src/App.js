import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Task from './component/Task';
import TaskList from './component/TaskList';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Task />} />
                <Route path="/task-list" element={<TaskList />} />
            </Routes>
        </Router>
    );
}

export default App;
