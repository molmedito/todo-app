import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Actions
import { unselectTask } from './../actions';

class TaskDetail extends Component {

    handleTask = task => {
        this.props.unselectTask(null);
    }

    render(){
        if(this.props.task){
            return(
                <div className="col-xs col-md-6 offset-md-3 position-static">
                    <div className="lightbox-background" onClick={() => this.handleTask()}></div>
                    <div className="task-detail">
                        <h4 className="task-detail__name">{ this.props.task.name } <span><img src="/assets/icons/icon-edit-1.png" alt="Ícono Editar" /></span></h4>

                        <div className="task-detail__description">
                            <h6 className="task-detail__subtitle">Descripción</h6>
                            <p className="task-detail__description-text">{ this.props.task.description }</p>
                        </div>

                        <div className="task-detail__comment-list">
                            <h6 className="task-detail__subtitle">Comentarios</h6>

                            { this.props.task.comments.map((comment, index) => {
                                console.log(comment);
                                return (
                                    <div key={index} className="task-detail__comment">
                                        <div className="task-detail__comment__detail-img">
                                            <img src="/assets/img/profile-thubnail@2x.png" alt="Foto de perfil usuario" />
                                        </div>
                                        <div className="task-detail__comment__detail-info">
                                            <h6 className="task-detail__comment__detail-username">
                                                {comment.user}

                                                <div className="task-detail__comment__detail-tools">
                                                    <span>
                                                        <img src="/assets/icons/icon-edit-2@2x.png" alt="Ícono Editar" />
                                                    </span>

                                                    <span>
                                                        <img src="/assets/icons/icon-delete@2x.png" alt="Ícono Editar" />
                                                    </span>
                                                </div>
                                            </h6>
                                            <p className="task-detail__comment__detail-comment">{comment.comment}</p>
                                            <p className="task-detail__comment__detail-date">{comment.date}</p>
                                        </div>
                                    </div>
                                )
                            }) }
                        </div>
                    </div>
                </div>
            )
        } else { return '' }
    }
};

const mapStateToProps = state => {
    return {
        task: state.activeTask,
    };
};

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
        unselectTask: unselectTask,
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(TaskDetail);
