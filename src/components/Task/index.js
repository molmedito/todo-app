import React from 'react';

const Task = ({task, onSelectedTask}) => {

    const handleSelectedTask = (task) => {
        onSelectedTask(task);
    }

    return (
        <div className="task" onClick={() => handleSelectedTask(task)}>
            <input type="checkbox" value="0" checked={task.completed} />
            <p>{task.name}</p>
            {task.comments.length ?
                <div className="task-comment-info">
                    <span>{task.comments.length}</span>
                </div> :
                ''
            }
        </div>
    );
}

export default Task;
