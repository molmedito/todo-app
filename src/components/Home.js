import React from 'react';
import PropTypes from 'prop-types';

// Services
import { Tareas } from './../services/Data';

const Home = () => {
    const tareas = Tareas();
    console.log(tareas)
    return (
        <div>
            <h1>Hola desde Todo App</h1>

            { tareas.length ?
                <div className="empty-state">
                    <p>{ tareas[0].name }</p>
                </div> :
                <div className="empty-state">
                    <p>No tienes tareas pendientes.</p>
                    <p>¡Eres el más capo!</p>
                </div>
            }
        </div>
    )
}

/* Home.propTypes = {
    Name: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    Comments: {

    }
} */

export default Home;