import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Actions
import {
    unselectTask,
    addCommentToTask,
    deleteCommentToTask,
    editCommentToTask,
    selectTask,
} from './../actions';

class TaskDetail extends Component {
    constructor(){
        super();

        this.state = {
            comment: '',
            commenting: false,
            user: 'Rosita Espinoza',
        }
    }

    handleTask = task => {
        this.props.unselectTask(null);
    }

    handlerAddComment = () => {
        this.props.task.comments.push({
            id: this.props.task.comments.length + 1,
            user: this.state.user,
            comment: this.state.comment,
            date: 'Jue 23 ene 2020'
        });

        this.props.addCommentToTask(this.props.task);


        this.setState({
            comment: '',
            commenting: false,
        })
    }

    handlerDeleteComment = (i, _id) => {
        const confirmar = window.confirm('¿Seguro desea eliminar el comentario');

        if(confirmar) {
            this.props.deleteCommentToTask(i, _id);
            this.props.unselectTask(null);
            this.props.selectTask(this.props.task);
        }
    }

    handlerEditComment = (i) => {
        this.props.task.comments[i].commenting = true;
        this.props.unselectTask(null);
        this.props.selectTask(this.props.task);
    }

    handlerEditedComment = (i) => {
        this.props.task.comments[i].commenting = false;
        this.props.task.comments[i].comment = this.state.comment;
        this.props.editCommentToTask(i, this.props.task.comments[i]);

        this.setState({
            comment: '',
        });
    }

    render(){
        if(this.props.task){
            return(
                <div className="col-xs col-md-6 offset-md-3 position-static">
                    <div className="lightbox-background" onClick={() => this.handleTask()}></div>
                    <div className="task-detail">
                        <h4 className="task-detail__name">{ this.props.task.name }</h4>

                        <div className="task-detail__comment-list">
                            <h6 className="task-detail__subtitle">Comentarios</h6>

                            { this.props.task.comments.map((comment, index) => {
                                return comment.commenting ?
                                    <div key={index} className="task-detail__comment">
                                        <div className="task-detail__comment__detail-img">
                                            <img src="/assets/img/profile-thubnail@2x.png" alt="Foto de perfil usuario" />
                                        </div>
                                        <div className="task-detail__comment__detail-info task-detail__comment__detail-info--new">
                                            <h6 className="task-detail__comment__detail-username">
                                                {this.state.user}
                                            </h6>
                                            <textarea
                                                className="input-textarea"
                                                placeholder="Escribe tu comentario..."
                                                maxLength="50"
                                                value={this.state.comment}
                                                onChange={(e) => this.setState({comment: e.target.value})}
                                            ></textarea>
                                            <button className="btn" onClick={() => this.handlerEditedComment(index)}>Comentar</button>
                                        </div>
                                    </div>
                                    :
                                    <div key={index} className="task-detail__comment">
                                        <div className="task-detail__comment__detail-img">
                                            <img src="/assets/img/profile-thubnail@2x.png" alt="Foto de perfil usuario" />
                                        </div>
                                        <div className="task-detail__comment__detail-info">
                                            <h6 className="task-detail__comment__detail-username">
                                                {comment.user}

                                                <div className="task-detail__comment__detail-tools">
                                                    <span onClick={() => this.handlerEditComment(index)}>
                                                        <img src="/assets/icons/icon-edit-2@2x.png" alt="Ícono Editar" />
                                                    </span>

                                                    <span onClick={() => this.handlerDeleteComment(index, this.props.task.id)}>
                                                        <img src="/assets/icons/icon-delete@2x.png" alt="Ícono Eliminar" />
                                                    </span>
                                                </div>
                                            </h6>
                                            <p className="task-detail__comment__detail-comment">{comment.comment}</p>
                                            <p className="task-detail__comment__detail-date">{comment.date}</p>
                                        </div>
                                    </div>
                                })
                            }

                            { this.state.commenting ?
                                <div className="task-detail__comment">
                                    <div className="task-detail__comment__detail-img">
                                        <img src="/assets/img/profile-thubnail@2x.png" alt="Foto de perfil usuario" />
                                    </div>
                                    <div className="task-detail__comment__detail-info task-detail__comment__detail-info--new">
                                        <h6 className="task-detail__comment__detail-username">
                                            {this.state.user}
                                        </h6>
                                        <textarea
                                            className="input-textarea"
                                            placeholder="Escribe tu comentario..."
                                            maxLength="50"
                                            value={this.state.comment}
                                            onChange={(e) => this.setState({comment: e.target.value})}
                                        ></textarea>
                                        <button className="btn" onClick={this.handlerAddComment}>Comentar</button>
                                    </div>
                                </div>
                                :
                                ''
                            }

                            <span className="link" onClick={() => this.setState({commenting: true})}>Agregar comentario</span>
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
        addCommentToTask: addCommentToTask,
        editCommentToTask: editCommentToTask,
        deleteCommentToTask: deleteCommentToTask,
        selectTask: selectTask,
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(TaskDetail);
