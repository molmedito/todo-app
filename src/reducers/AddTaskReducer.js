export default (state = [], action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return [...state, action.payload]

        case 'COMPLETE_TASK':
            const c = state.findIndex(
                element => element.id === action.payload.id
            );

            state.splice(c, 1, action.payload)

            return [...state];

        case 'END_EDITING_TASK':
            const e = state.findIndex(
                element => element.id === action.id
            );

            state[e].editing = false;

            return [...state];

        case 'DELETE_TASK':
            const d = state.findIndex(
                element => element.id === action.id
            );

            state.splice(d, 1)


            return [...state];

        default:
            return [...state];
    }
}
