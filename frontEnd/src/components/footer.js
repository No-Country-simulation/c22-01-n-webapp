import React from "react";

const Footer = () => {
    return (
        <footer className="footer" style={{ backgroundColor: '#5adbdb' }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-6 col-md-4 mt-4 col-lg-3 text-center text-sm-start">
                        <div className="information">
                            <h6 className="footer-heading text-uppercase text-white fw-bold">Información</h6>
                            <ul className="list-unstyled footer-link mt-4">
                                <li className="mb-1">
                                    <a href="https://zany-engine-r47jr9v5vprw3wp5j-3000.app.github.dev/aviso-de-privacidad" className="text-white text-decoration-none fw-semibold">
                                        Aviso de privacidad
                                    </a>
                                </li>
                                <li className="mb-1">
                                    <a href="https://zany-engine-r47jr9v5vprw3wp5j-3000.app.github.dev/contacto" className="text-white text-decoration-none fw-semibold">
                                        Contacto
                                    </a>
                                </li>
                                <li className="mb-1">
                                    <a href="https://zany-engine-r47jr9v5vprw3wp5j-3000.app.github.dev/register" className="text-white text-decoration-none fw-semibold">
                                        Registrate
                                    </a>
                                </li>
                                <li>
                                    <a href="https://zany-engine-r47jr9v5vprw3wp5j-3000.app.github.dev/agendar-cita" className="text-white text-decoration-none fw-semibold">
                                        Agendar cita
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 mt-4 col-lg-3 text-center text-sm-start">
                        <div className="resources">
                            <h6 className="footer-heading text-uppercase text-white fw-bold">Recursos</h6>
                            <ul className="list-unstyled footer-link mt-4">
                                <li className="mb-1">
                                    <a href="https://codepen.io/Gaurav-Rana-the-reactor" className="text-white text-decoration-none fw-semibold">
                                        Glosario
                                    </a>
                                </li>
                                <li className="mb-1">
                                    <a href="https://codepen.io/Gaurav-Rana-the-reactor" className="text-white text-decoration-none fw-semibold">
                                        FAQ
                                    </a>
                                </li>
                                
                               
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 mt-4 col-lg-2 text-center text-sm-start">
                        <div className="social">
                            <h6 className="footer-heading text-uppercase text-white fw-bold">Social</h6>
                            <ul className="list-inline my-4">
                                <li className="list-inline-item">
                                    <a href="https://codepen.io/Gaurav-Rana-the-reactor" className="text-white btn-sm btn btn-primary mb-2">
                                        <i className="bi bi-facebook"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://codepen.io/Gaurav-Rana-the-reactor" className="text-white btn-sm btn btn-light mb-2">
                                        <i className="bi bi-instagram"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://codepen.io/Gaurav-Rana-the-reactor" className="text-white btn-sm btn btn-primary mb-2">
                                        <i className="bi bi-twitter"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://codepen.io/Gaurav-Rana-the-reactor" className="text-white btn-sm btn btn-success mb-2">
                                        <i className="bi bi-whatsapp"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                   
                    
                </div>
            </div>
            <div className="text-center bg-dark text-white mt-4 p-1">
                <p className="mb-0 fw-bold">MediConnect 2024 © , All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
