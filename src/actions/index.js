export const selectTask = (task) => {
    return {
        type: 'TASK_SELECTED',
        payload: task,
    }
}

export const unselectTask = (data) => {
    return {
        type: 'TASK_UNSELECTED',
        payload: data,
    }
}


export const addTask = (task) => {
    return {
        type: 'ADD_TASK',
        payload: task,
    }
}

export const completeTask = (task) => {
    return {
        type: 'COMPLETE_TASK',
        payload: task,
    }
}

export const endEditingTask = (id) => {
    return {
        type: 'END_EDITING_TASK',
        id: id,
    }
}

export const deleteTask = (id) => {
    return {
        type: 'DELETE_TASK',
        id: id,
    }
}
