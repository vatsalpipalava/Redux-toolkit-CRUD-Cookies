const initialize = {
    tasks: []
};

const taskReducer = (state = initialize, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            };
        case 'DELETE_TASK':
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            };
            case 'EDIT_TASK': // Change this to 'EDIT_TASK'
            return {
              ...state,
              tasks: state.tasks.map((task) =>
                task.id === action.payload.id ? action.payload.updatedTask : task
              ),
            };
        default:
            return state;
    }
}

export default taskReducer;
