import { combineReducers } from 'redux';

// Reducers
// /import TaskReducer from './TaskReducer';
import AddTaskReducer from './AddTaskReducer';
import ActiveTaskReducer from './ActiveTaskReducer';

const allReducers = combineReducers({
    tasks: AddTaskReducer,
    activeTask: ActiveTaskReducer,
});

export default allReducers;
