export const selectTask = (task) => {
    console.log(`Hiciste click en la tarea ${task.name}`)
    
    return {
        type: 'TASK_SELECTED',
        payload: task,
    }
}
