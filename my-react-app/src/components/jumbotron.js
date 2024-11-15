import React from "react";

const Jumbotron = () => {
    return (
        <div
            className="jumbotron jumbotron-fluid border"
            style={{
                backgroundImage: 'url("https://i.pinimg.com/736x/6e/37/5a/6e375ad883c69fbb6f5845e99ca25623.jpg")',
                backgroundSize: "cover",        // Para cubrir todo el espacio del jumbotron
                backgroundPosition: "center",   // Para centrar la imagen
                backgroundRepeat: "no-repeat",  // Para evitar que se repita la imagen
                height: "30vh"                 // Para hacer que el jumbotron ocupe todo el alto de la ventana
            }}
        >
            <div className="container">
                <h1 className="display-4">Atencion 24/7</h1>
                <p className="lead">Doctores disponibles para cualquier emergencia. Cuida de los tuyos siempre..</p>
            </div>
        </div>
    );
}

export default Jumbotron;
