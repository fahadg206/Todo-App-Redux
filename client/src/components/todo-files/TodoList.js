import React from "react";
import { connect } from "react-redux";
import { fetchTodos } from "../../actions";
import { Link } from "react-router-dom"

class TodoList extends React.Component {
    componentDidMount () {
        this.props.fetchTodos()
    }

    renderDeleteEditButtons(todo) {
        if(todo.userId === this.props.currentUserId) {
            return(
                <div className="right floated content">
                    <Link to={`/todos/edit/${todo.id}`} className="ui button primary">Edit</Link>
                    <Link to={`/todos/delete/${todo.id}`} className="ui button negative">Delete</Link>
                </div>
            )
        }
    }

    renderCreateButton() {
        if(this.props.signedIn) {
            return (
                <div style={{textAlign: "right"}}>
                    <Link to="/todos/new" className="positive ui button">CREATE TODO</Link>
                </div>
            ) 
        }
    }

    renderList() {
        return this.props.todos.map(todo => {
            return (
                <div className="item" key={todo.id}>
                    {this.renderDeleteEditButtons(todo)}
                    <i className="calendar check icon" />
                    <div className="content">
                        <h3>{todo.title}</h3>
                        <div className="description">{todo.description}</div>
                    </div>
                </div>
            )
        })
    }
    
    render() {
        return (
            <div>
                <h2>Todos</h2>
                <div className="ui celled list">{this.renderList()}</div>
                {this.renderCreateButton()}
            </div>
        ) 
    } 
}

const mapStateToProps = (state) => {
    return { 
        todos: Object.values(state.todos), 
        currentUserId: state.auth.userId,
        signedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, { fetchTodos })(TodoList);