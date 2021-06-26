import './TaskRow.css';
import { connect } from 'react-redux';
import Delete from '../images/delete.png';
import Done from '../images/done.png';


const TaskRow = ({ name, status, deleteTask, moveToDone }) => {
    return (
        <tr>
            <td className='taskNames'>
                {name}
                <span onClick={() => deleteTask(name)}>
                    <img src={Delete}
                        alt="Delete Task"
                        className="done" /></span>
                {status !== 'done' ? // doesn't work with ==='pending'
                    <span onClick={() => moveToDone(name)}>
                        <img src={Done}
                            alt="Mark as DONE"
                            className="pending" /></span> : null}
            </td>
        </tr>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        deleteTask: (name) => dispatch({ type: 'DELETE_TASK', payload: name }),
        moveToDone: (name) => dispatch({ type: 'MOVE_TO_DONE', payload: name })
    }
}

export default connect(null, mapDispatchToProps)(TaskRow)
