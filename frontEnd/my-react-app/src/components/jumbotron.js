import React from "react";

const Jumbotron = () => {
    return (
        <div
            className="jumbotron jumbotron-fluid border"
            style={{
                backgroundImage:
                    'url("https://i.pinimg.com/736x/6e/37/5a/6e375ad883c69fbb6f5845e99ca25623.jpg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "40vh",
            }}
        >
            <div
                className="container-fluid d-flex justify-content-center align-items-center"
                style={{ height: "100%" }}
            >
                <div className="text-center">
                    <h1 className="display-5 text-white">Atencion 24/7</h1>
                    <p className="lead text-white">
                        Doctores disponibles para cualquier emergencia. Cuida de los tuyos
                        siempre..
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Jumbotron;
