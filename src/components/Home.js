import React from 'react';
//import PropTypes from 'prop-types';

// Components
import TaskList from './../containers/TaskList';
import TaskDetail from './../containers/TaskDetail';

const Home = () => {
    return (
        <div>
            <TaskList />
            <TaskDetail />
        </div>
    )
}

/* Home.propTypes = {
    Name: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    Comments: {

    }
} */

export default Home;
