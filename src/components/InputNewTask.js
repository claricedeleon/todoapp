import { connect } from 'react-redux';
import { useState } from 'react';
import './InputNewTask.css';

const InputNewTask = ({ tasks, addNewTask }) => {

    const [newTaskName, setNewTaskName] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const taskNameEventHandler = (e) => {
        setNewTaskName(e.target.value);
    }

    const addTaskBtnEventHandler = () => {
        if (newTaskName.trim() !== '') {
            let taskDuplicate = false;

            tasks.map(task => {
                if (task.name === newTaskName) {
                    taskDuplicate = true;
                }
            })
            if (taskDuplicate) {
                setErrorMessage('Task already exists.');
                setNewTaskName('');
            }
            else {
                let newTaskObj = {
                    name: newTaskName,
                    status: 'pending'
                }
                addNewTask(newTaskObj);
                setNewTaskName('');
                setErrorMessage('');
            }
        }
        else {
            setErrorMessage('Task name is required.')
        }
    }

    return (
        <div className="input-container">
            <h4>New Task</h4>
            <input type="text"
                onChange={taskNameEventHandler}
                value={newTaskName} />
            <button onClick={addTaskBtnEventHandler}>Add</button>
            <br />
            <div className="error">{errorMessage}</div>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        tasks: state.tasks
    }
}


const mapDispatchToProps = dispatch => {
    return {
        addNewTask: (newTaskName) => dispatch({ type: 'ADD_NEW_TASK', payload: newTaskName })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputNewTask);
