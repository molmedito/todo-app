import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

// Components
import Task from './../components/Task';

// Actions
import { selectTask } from './../actions';


class TaskList extends Component {
    listToTask(tasks, completed) {
        return completed ?
        tasks.map(task => {
            return task.completed ?
                <Task
                    key={task.name}
                    task={task}
                    onSelectedTask={this.handleTask}
                />
                :
                ''
        })
        :
            tasks.map(task => {
                return task.completed ?
                    ''
                    :
                    <Task
                        key={task.name}
                        task={task}
                        onSelectedTask={this.handleTask}
                    />
            })
    }

    handleTask = task => {
        this.props.selectTask(task);
    }

    render(){
        return (
            <div>
                { this.props.tasks.length ?
                    <div>
                        <div className="task-list">
                            <h3>Pendientes</h3>
                            <p>Jueves 23 de enero de 2019</p>

                            { this.listToTask(this.props.tasks, false) }
                        </div>
                        <div className="task-list">
                            <h3>Completadas</h3>

                            { this.listToTask(this.props.tasks, true) }
                        </div>
                    </div> :
                    <div className="empty-state">
                        <p>No tienes tareas pendientes.</p>
                        <p>¡Eres el más capo!</p>
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
    return bindActionCreators({selectTask: selectTask}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(TaskList);
