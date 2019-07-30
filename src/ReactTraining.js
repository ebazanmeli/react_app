import React from 'react'

class ReactTraining extends React.Component {
    render() {
        return React.createElement("div", {className: "react-training"},
            React.createElement("h1", null, "Objetivo del curso",
            React.createElement("ul", null),
            React.createElement("li", null, "Configurar react..."),
            React.createElement("li", null, "Revisar fundamentos..."),
            React.createElement("li", null, "Construir una aplicació del ejemplo...")));


        /*(
            <div className='react-training' >
                <h1>Objetivos del curso</h1>
                <ul>
                    <li>Configurar React.</li>
                    <li>Revisar los fundamentos.</li>
                    <li>Construir una aplicación de ejemplo.</li>
                </ul>
            </div>
        )*/
    }
}

export default ReactTraining;
