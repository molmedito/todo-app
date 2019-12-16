export default (state = null, action) => {
    switch (action.type) {
        case 'TASK_SELECTED':
            return action.payload;

        case 'TASK_UNSELECTED':
            return action.payload;

        default:
            return state;
    }
}
