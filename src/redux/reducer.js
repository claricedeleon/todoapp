const initialState = {
    tasks: [
        { name: "eat", status: "pending" },
        { name: "code", status: "pending" },
        { name: "sleep", status: "done" }
    ],
    newTask: '',
    errorMessage: ''
}

const reducer = (state = initialState, action) => {
    let tasksCopy;

    switch (action.type) {
        case 'ADD_NEW_TASK':
            tasksCopy = [...state.tasks, action.payload];
            return {
                ...state,
                tasks: tasksCopy
            }
        case 'MOVE_TO_DONE':
            let moveToDoneArray = [...state.tasks]
            moveToDoneArray.find(task => task.name === action.payload).status = 'done'
            return {
                ...state,
                tasks: moveToDoneArray
            }
        case 'DELETE_TASK':
            let filteredTasks = state.tasks.filter(task => task.name !== action.payload);
            return {
                ...state,
                tasks: filteredTasks
            }
        default:
            return state;
    }
}

export default reducer;