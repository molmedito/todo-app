import React from 'react';
import './App.css';

// Components
import Home from './components/Home';

const App = () => {
    return (
        <div className="App">
            <header className="todo-app-header">
                <h1>TODO APP</h1>
            </header>

            <Home />
        </div>
    );
}

export default App;
