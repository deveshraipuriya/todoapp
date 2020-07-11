import { EDIT_TASK, DELETE_TASK, ADD_TASK, BOOLEAN_FOR_EDIT, MARK_TASK_AS_COMPLETE } from '../actionTypes';

const initialState = {
    // taskArray: [{ task_name: 'testtask', id: 12323, isActive: true }, { task_name: 'testtask2', id: 123544, isActive: true }],
    taskArray: [],
    editBool: false
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case EDIT_TASK:
            return {
                ...state,
                taskArray: state.taskArray.map(task => task.id === payload.id ?
                    {
                        ...task,
                        task_name: payload.task_name
                    }
                    :
                    task
                ),
                editBool: false
            }
        case DELETE_TASK:
            return {
                ...state,
                taskArray: state.taskArray.filter(task => task.id !== payload),
                editBool: false
            }
        case ADD_TASK:
            return {
                ...state,
                taskArray: [...state.taskArray, payload],
                editBool: false
            }
        case BOOLEAN_FOR_EDIT:
            return {
                ...state,
                editBool: true
            }
        case MARK_TASK_AS_COMPLETE:
            return {
                ...state,
                taskArray: state.taskArray.map(task => task.id === payload ?
                    {
                        ...task,
                        isActive: false
                    }
                    :
                    task
                ),
                editBool: false
            }
        default:
            return state
    }
}
