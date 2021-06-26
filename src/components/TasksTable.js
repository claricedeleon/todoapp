import { connect } from 'react-redux';
import TaskRow from './TaskRow';
import './TasksTable.css';
import InputNewTask from './InputNewTask';

const TasksTable = ({ tasks }) => {
    let pendingTasks = tasks.filter(task => task.status === 'pending')

    return (
        <div className="container">
            <h2>To-Do App</h2>
            <InputNewTask />
            <h4>Pending Tasks</h4>
            <table className="table">
                <tbody>
                    {pendingTasks.length > 0 ? pendingTasks.map(task => (
                        <TaskRow key={task.name} name={task.name} />)) : 'No Pending Tasks'}
                </tbody>
            </table>

            <h4>Done Tasks</h4>
            <table className="table">
                <tbody>
                    {
                        tasks.filter(task => task.status === 'done').map(task => (
                            <TaskRow key={task.name} name={task.name} status={task.status} />
                        )
                        )}
                </tbody>
            </table>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        tasks: state.tasks
    }
}

export default connect(mapStateToProps)(TasksTable)
