import Header from "@/components/common/Header";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "@/components/common/Footer";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "MediConnect | Gestor de Citas Médicas",
	description:
		"Plataforma para agendar citas, gestionar disponibilidad de doctores y acceder al historial médico de pacientes.",
	keywords: [
		"citas médicas online",
		"gestor de citas",
		"agenda médica",
		"historial de pacientes",
		"plataforma médica",
		"sistema de doctores",
		"agendar consulta",
		"MediConnect",
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
			>
				<Header />
				<main className="flex-grow">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
