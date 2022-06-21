import React from "react";
import { Field, reduxForm } from "redux-form";


class TodoForm extends React.Component {
renderError(meta) {
    if(meta.touched && meta.error) {
        return (
            <div className="ui error message">
                <div className="header">{meta.error}</div>
            </div>
        )
    }
}

    //destructred input property from formProps
    renderInput = ({ input, label, meta }) => {
        //use spread operator to take all props from input(formProps) and automatically
        //assign each of those as props to input element
        const className = `field ${meta.error && meta.touched ? 'error': ''}`
        return(
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        ) 
    }

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues)
    }

    render() {
        return (
            <form 
            onSubmit={this.props.handleSubmit(this.onSubmit)} 
            className="ui form error"
            >
                <Field 
                    name="title" 
                    component={this.renderInput} 
                    label="Enter Todo"
                />
                <button className="ui button primary">Submit</button>
            </form>
        ) 
    }
    
}


const validate = (formValues) => {
    const errors = {}

    if(!formValues.title) {
        errors.title = "You must enter a title"
    }
    if(!formValues.description) {
        errors.description = "You must enter a description"
    }

    return errors;
}

export default reduxForm({
    form: 'todoForm',
    validate: validate
})(TodoForm);

