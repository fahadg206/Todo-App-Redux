import React from "react";
import { connect } from "react-redux";
import {fetchTodo, editTodo} from "../../actions";
import TodoForm from "./TodoForm";


class TodoEdit extends React.Component {
    componentDidMount() {
        this.props.fetchTodo(this.props.match.params.id)
    }

    onSubmit = (formValues) => {
        this.props.editTodo(this.props.match.params.id, formValues)
    }

    render() {
        if(!this.props.todos) {
            return <div>Loading...</div>
        }

        return (
            <div>
                <h3>Edit a Todo</h3>
                <TodoForm 
                    initialValues={{title:this.props.todos.title, description: this.props.todos.description}} 
                    onSubmit={this.onSubmit} 
                />
            </div>
        ) 
    }
}
   

const mapStateToProps = (state, ownProps) => {
    return {
        todos: state.todos[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, {fetchTodo, editTodo})(TodoEdit);