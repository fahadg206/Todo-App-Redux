import todos from '../apis/todos';
import history from '../history';
import { 
    SIGN_IN, 
    SIGN_OUT, 
    CREATE_TODO, 
    DELETE_TODO,
    EDIT_TODO,
    FETCH_TODOS,
    FETCH_TODO

} from "../actions/types";


export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    }
}
export const signOut = () => {
    return {
        type: SIGN_OUT
    }
}

// return a function when using redux thunk
export const createTodo = (formValues) => {
    return async (dispatch, getState) => {
        const { userId } = getState().auth
        const response = await todos.post('/todos', {...formValues, userId });

        dispatch({type: CREATE_TODO, payload: response.data})
        //programmatic navigation. Whenever we create a todo, naviagte to all todos list
        history.push('/')
    }
};

export const fetchTodos = () => async dispatch => {
    const response = await todos.get('/todos');
    
    dispatch({ type: FETCH_TODOS, payload: response.data}) 
}

export const  fetchTodo = (id) => async dispatch => {
    const response = await todos.get(`/todos/${id}`);

    dispatch({ type: FETCH_TODO, payload: response.data})
}

export const editTodo = (id, formValues) => async dispatch => {
    const response = await todos.patch(`/todos/${id}`, formValues);

    dispatch({ type: EDIT_TODO, payload: response.data});
    //navigate user back to todolist component after edit submission
    history.push("/")
}

export const deleteTodo = (id) => async dispatch => {
    await todos.delete(`/todos/${id}`);

    dispatch({ type: DELETE_TODO, payload: id });
    history.push("/")
}