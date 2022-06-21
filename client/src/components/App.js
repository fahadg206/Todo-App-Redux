import React from "react";
import { Router, Route, Routes} from 'react-router-dom';
import TodoCreate from "./todo-files/TodoCreate";
import TodoEdit from "./todo-files/TodoEdit";
import TodoDelete from "./todo-files/TodoDelete";
import TodoList from "./todo-files/TodoList";
import Header from "./Header";
import history from "../history";
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';



const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <div>
                    <Header />
                        <Route path="/" exact component={TodoList} />
                        <Route path="/todos/new" exact component={TodoCreate} />
                        <Route path="/todos/edit/:id" exact component={TodoEdit} />
                        <Route path="/todos/delete/:id" exact component={TodoDelete} />
                </div>
            </Router>
        </div>
    ) 
}

export default App