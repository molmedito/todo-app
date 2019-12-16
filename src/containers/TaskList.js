import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

// Components
import Task from './../components/Task';

// Actions
import {
    selectTask,
    completeTask,
    addTask,
    endEditingTask,
    deleteTask,
} from './../actions';


class TaskList extends Component {
    listToTask(tasks, completed) {
        return completed ?
            tasks.map((task, index) => {
                return task.completed && !task.editing ?
                    <Task
                        key={index}
                        task={task}
                        onSelectedTask={this.handleSelectedTask}
                        onCompletedTask={this.handleCompletedTask}
                        onEndEditingTask={this.handleEndEditingTask}
                        onDeleteTask={this.handleDeleteTask}
                    />
                    :
                    ''
            })
        :
            tasks.map((task, index) => {
                return task.completed ?
                    ''
                    :
                    <Task
                        key={index}
                        task={task}
                        onSelectedTask={this.handleSelectedTask}
                        onCompletedTask={this.handleCompletedTask}
                        onEndEditingTask={this.handleEndEditingTask}
                        onDeleteTask={this.handleDeleteTask}
                    />
            })
    }

    taskEditing(tasks) {
        tasks.map((task, index) => {
            return task.editing ?
                <Task
                    key={index}
                    task={task}
                    onSelectedTask={this.handleSelectedTask}
                    onCompletedTask={this.handleCompletedTask}
                    onEndEditingTask={this.handleEndEditingTask}
                    onDeleteTask={this.handleDeleteTask}
                />
                :
                ''
        })
    }

    handleSelectedTask = task => {
        this.props.selectTask(task);
    }

    handleAddTask = () => {
        const _id = this.props.tasks[this.props.tasks.length - 1].id + 1;

        this.props.addTask({
            id: _id,
            name: '',
            description: '',
            completed: false,
            editing: true,
            comments: []
        })
        //.then(console.log('PROMISE'));
    }
    handleCompletedTask = task => {
        this.props.completeTask(task);
    }
    handleEndEditingTask = id => {
        this.props.endEditingTask(id);
    }

    handleDeleteTask = id => {
        this.props.deleteTask(id);
    }

    render(){
        return (
            <div className="col-xs col-md-6 offset-md-3 position-static">
                { this.props.tasks.length ?
                    <div>
                        <div className="task-list">
                            <h6 className="task-list__title">Pendientes</h6>
                            <p>Jueves 23 de enero de 2019</p>

                            { this.taskEditing(this.props.tasks) }
                            { this.listToTask(this.props.tasks, false) }
                        </div>
                        <div className="task-list">
                            <h6 className="task-list__title">Completadas</h6>

                            { this.listToTask(this.props.tasks, true) }
                        </div>
                        <div className="task-add-button">
                            <button className="btn btn-circle" onClick={() => this.handleAddTask()}>
                                <img src="/assets/icons/icon-add@2x.png" alt="" />
                            </button>
                        </div>
                    </div> :
                    <div className="col-xs col-md-6 offset-md-3">
                        <div className="empty-state">
                            <p>No tienes tareas pendientes.</p>
                            <p>¡Eres el más capo!</p>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        tasks: state.tasks,
    };
};

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
        selectTask: selectTask,
        completeTask: completeTask,
        addTask: addTask,
        endEditingTask: endEditingTask,
        deleteTask: deleteTask,
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(TaskList);
