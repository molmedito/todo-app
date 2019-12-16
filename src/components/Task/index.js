import React, { useState, useEffect } from 'react';

const Task = ({
    task,
    onSelectedTask,
    onCompletedTask,
    onEndEditingTask,
    onDeleteTask,
 }) => {

    useEffect(() => {
        const input = document.querySelector('.task-info__input')
        if(input){
            input.focus();
        }
    });

    const [value, setValue] = useState(task.name);

    const handleSelectedTask = (event) => {
        onSelectedTask(task);
    }

    const handleCheckbox = (event, completed) => {
        event.stopPropagation();

        task.completed = !completed;

        onCompletedTask(task);
    }

    const handleKeyup = (event) => {
        if (event.keyCode === 13) {
            var opcion = window.confirm(`El nombre de tu tarea será ${value}`);

            if(opcion) {
                task.name = value;
                onEndEditingTask(task.id)
            } else {
                onDeleteTask(task.id);
            }
        }
    }

    const handleBlur = (event) => {
        onDeleteTask(task.id);
    }


    return (
        <div>
            { task.editing ?
                <div className="task task--editing">
                    <div className="task__info">
                        <label className={"input-checkbox " + (task.completed ? 'checked' : '')}>
                        </label>
                        <input
                            className="task-info__input"
                            type="text"
                            placeholder="Nombre tarea..."
                            value={value}
                            onChange={e => setValue(e.target.value)}
                            onKeyUp={e => handleKeyup(e)}
                            onBlur={e => handleBlur(e)}
                        />
                        <div className="task__comment-info">
                            <span><img className="icon" src="/assets/icons/icon-check-2@2x.png" alt="Ícono aceptar" /></span>
                            <span><img className="icon" src="/assets/icons/icon-delete@2x.png" alt="Ícono borrar" /></span>
                        </div>
                    </div>
                </div>
                :
                <div className="task" onClick={handleSelectedTask}>
                    <div className="task__info">
                        <label onClick={e => handleCheckbox(e, task.completed)} className={"input-checkbox " + (task.completed ? 'checked' : '')}>
                        </label>
                        <p className="task-info__name">{task.name}</p>
                    </div>
                    {task.comments.length ?
                        <div className="task__comment-info">
                            <span>{task.comments.length} <img className="icon" src="/assets/icons/icon-comment@2x.png" alt="Ícono comentario" /></span>
                        </div> :
                        ''
                    }
                </div>
            }
        </div>
    );
}

export default Task;
