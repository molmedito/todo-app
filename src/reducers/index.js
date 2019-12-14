import {combineReducers} from 'redux';
import TaskReducer from './TaskReducer';
import ActiveTaskReducer from './ActiveTaskReducer';

const allReducers = combineReducers({
    tasks: TaskReducer,
    activeTask: ActiveTaskReducer,
});

export default allReducers;
