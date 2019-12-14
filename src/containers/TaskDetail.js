import React, {Component} from 'react';
import {connect} from 'react-redux';

class TaskDetail extends Component {
    render(){
        return(
            <h1>
                {this.props.task ?
                    this.props.task.name :
                    ''
                }
            </h1>
        );
    }
};

const mapStateToProps = state => {
    return {
        task: state.activeTask,
    };
};

export default connect(mapStateToProps)(TaskDetail);
