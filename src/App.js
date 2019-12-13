import React from 'react';
import './App.css';

// Services
import { Tareas } from './services/Data';

// Components
import Home from './components/Home';

const App = () => {
    const {tareas} = Tareas;
    
    return (
        <div className="App">
            <header className="todo-app-header">
                <h1>TODO APP</h1>
            </header>

            <Home tareas={tareas} /> 
        </div>
    );
}

export default App;

