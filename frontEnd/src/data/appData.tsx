import { HiMail } from "react-icons/hi";
import {
	HiChatBubbleBottomCenterText,
	HiClock,
	HiPhone,
} from "react-icons/hi2";

export const navigationLinks = [
	{ id: 1, title: "Inicio", href: "/" },
	{ id: 2, title: "Citas", href: "/appointments" },
	{ id: 3, title: "Registrarse", href: "/register" },
	{ id: 4, title: "Iniciar Sesión", href: "/login" },
];

export const footerLinks = [
	{ id: 1, title: "Sobre Nosotros", href: "/about" },
	{ id: 2, title: "Términos de Servicio", href: "/terms" },
	{ id: 3, title: "Política de Privacidad", href: "/privacy" },
	{ id: 4, title: "Contacto", href: "/contact" },
	{ id: 5, title: "FAQ", href: "/faq" },
];

export const faqData = [
	{
		id: 1,
		question: "¿Cómo registro una cuenta?",
		answer:
			"Completa el formulario de registro con tus datos personales y confirma tu correo electrónico.",
	},
	{
		id: 2,
		question: "¿Cómo programo una cita?",
		answer:
			"Ingresa a tu cuenta, busca un médico por especialidad, selecciona la fecha y hora disponible, y confirma la cita.",
	},
	{
		id: 3,
		question: "¿Puedo cancelar una cita?",
		answer:
			"Sí, desde tu panel de usuario puedes cancelar citas siempre que sea con un mínimo de 24 horas de antelación.",
	},
	{
		id: 4,
		question: "¿Mi información está segura?",
		answer:
			"Sí, utilizamos encriptación y seguimos estrictamente las leyes de protección de datos para garantizar la privacidad de tu información.",
	},
	{
		id: 5,
		question: "¿La plataforma es gratuita?",
		answer:
			"El registro es gratuito, pero algunas consultas o servicios médicos pueden tener un costo definido por el profesional.",
	},
];

export const termsData = [
	{
		id: 1,
		title: "Registro y veracidad de la información:",
		data: [
			"Todos los datos que proporciones deben ser reales, precisos y actualizados.",
			"Cuentas con la responsabilidad de mantener la seguridad de tus credenciales.",
		],
	},
	{
		id: 2,
		title: "Uso permitido:",
		data: [
			"Está prohibido el uso de la plataforma para fines ilícitos o ajenos a la atención médica.",
			"No se permite suplantar identidades ni manipular información.",
		],
	},
	{
		id: 3,
		title: "Servicios y disponibilidad:",
		data: [
			"Las consultas médicas estarán sujetas a disponibilidad de agenda.",
			"Podremos reprogramar citas por causas justificadas, informando al usuario con antelación.",
		],
	},
	{
		id: 4,
		title: "Limitación de responsabilidad:",
		data: [
			"No garantizamos disponibilidad ininterrumpida del servicio.",
			"No nos hacemos responsables por problemas derivados de la conexión del usuario, fallos externos o fuerza mayor.",
		],
	},
	{
		id: 5,
		title: "Modificaciones:",
		data: [
			"Nos reservamos el derecho de actualizar estos términos en cualquier momento.",
			"Notificaremos cambios importantes a través de la plataforma o por correo electrónico.",
		],
	},
];

export const privacyData = [
	{
		id: 1,
		title: "Datos recopilados:",
		data: [
			"Nombre, apellidos, correo electrónico, teléfono, DNI, dirección.",
			"En caso de médicos, credenciales profesionales.",
		],
	},
	{
		id: 2,
		title: "Uso de los datos:",
		data: [
			"Gestionar tu cuenta.",
			"Programar consultas.",
			"Enviar recordatorios.",
			"Mejorar el servicio.",
		],
	},
	{
		id: 3,
		title: "Protección de datos:",
		data: [
			"Aplicamos cifrado y medidas de seguridad para prevenir accesos no autorizados.",
		],
	},
	{
		id: 4,
		title: "Compartición de información:",
		data: [
			"No compartimos datos con terceros sin tu consentimiento.",
			"Podemos hacerlo si es requerido por ley o en emergencias médicas.",
		],
	},
	{
		id: 5,
		title: "Tus derechos:",
		data: ["Puedes acceder, modificar o eliminar tus datos cuando lo desees."],
	},
];

export const contactData = [
	{
		id: 1,
		fieldName: "Correo electrónico de soporte:",
		fieldValue: "soporte@tuwebapp.com",
		icon: HiMail,
	},
	{
		id: 2,
		fieldName: "Teléfono de atención:",
		fieldValue: "+54 11 5555 5555",
		icon: HiPhone,
	},
	{
		id: 3,
		fieldName: "Formulario de contacto:",
		fieldValue: "Disponible en la sección de ayuda dentro de tu cuenta.",
		icon: HiClock,
	},
	{
		id: 4,
		fieldName: "Horario de atención:",
		fieldValue: "Lunes a viernes de 8:00 a 18:00 hs",
		icon: HiChatBubbleBottomCenterText,
	},
];
