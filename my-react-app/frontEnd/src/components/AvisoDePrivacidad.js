// src/components/AvisoDePrivacidad.js
import React from "react";


const AvisoDePrivacidad = () => {
    return (
        <div className="aviso-privacidad-container">
            <div className="container py-5">
                <h2 className="text-center mb-4">Aviso de Privacidad</h2>

                <div className="content">
                    <p><strong>Vitalia Telemedicina</strong> se compromete a proteger y respetar tu privacidad. Este aviso explica cómo recopilamos, usamos, y protegemos tu información personal cuando usas nuestros servicios.</p>

                    <h4>1. Información que recopilamos</h4>
                    <p>
                        Recopilamos información personal cuando te registras en nuestra plataforma, como tu nombre, dirección de correo electrónico, número de teléfono, edad, dirección, y otra información relevante para la atención médica.
                        También podemos recopilar información sobre tu salud, como tus síntomas, diagnóstico, y otros detalles médicos que ingreses en nuestra plataforma durante las consultas.
                    </p>

                    <h4>2. Uso de la información</h4>
                    <p>
                        Usamos la información que recopilamos para proporcionarte un servicio adecuado y personalizado, como agendar consultas, hacer seguimiento de tu salud, enviarte recordatorios de citas, y mejorar nuestra plataforma de telemedicina.
                        También usamos tus datos para cumplir con obligaciones legales y para fines de investigación médica, siempre que sea necesario y conforme a la ley.
                    </p>

                    <h4>3. Protección de la información</h4>
                    <p>
                        Nos comprometemos a proteger la información que nos proporcionas. Implementamos medidas de seguridad físicas, electrónicas y procedimentales para proteger tus datos personales.
                        Toda la información se almacena de manera encriptada y solo personal autorizado tiene acceso a ella.
                    </p>

                    <h4>4. Derechos de los usuarios</h4>
                    <p>
                        Tienes derecho a acceder, corregir, o eliminar tu información personal en cualquier momento. Si deseas realizar alguno de estos cambios, por favor, contáctanos a través de nuestro soporte técnico.
                        Además, puedes revocar tu consentimiento para el tratamiento de tus datos personales si así lo deseas.
                    </p>

                    <h4>5. Cambios en este aviso de privacidad</h4>
                    <p>
                        Este aviso de privacidad puede ser modificado en el futuro, en caso de que haya cambios en la legislación aplicable o en nuestras prácticas. En caso de cambios importantes, te informaremos oportunamente mediante el correo electrónico que hayas proporcionado.
                    </p>

                    <h4>6. Contacto</h4>
                    <p>
                        Si tienes alguna pregunta o inquietud sobre cómo manejamos tu información personal, no dudes en ponerte en contacto con nosotros en <strong>privacidad@vitalia.com</strong>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AvisoDePrivacidad;
