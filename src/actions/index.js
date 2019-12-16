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

export const addCommentToTask = (task) => {
    return {
        type: 'ADD_COMMENT_TO_TASK',
        payload: task,
    }
}

export const editCommentToTask = (i, comment) => {
    return {
        type:  'EDIT_COMMENT_TO_TASK',
        i: i,
        id: comment.id,
        payload: comment
    }
}


export const deleteCommentToTask = (i, id) => {
    return {
        type: 'DELETE_COMMENT_TO_TASK',
        i: i,
        id: id,
    }
}
