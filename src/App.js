import React from 'react';
import './scss/main.scss';
//import './App.scss';

// Components
import Home from './components/Home';

const App = () => {
    return (
        <div className="App">
            <header className="todo-app-header">
                <h1 className="todo-app-logo">TODO APP</h1>
            </header>

            <Home />
        </div>
    );
}

export default App;
