import React from "react";
import { footerLinks } from "@/data/appData";

const Footer = () => {
	return (
		<footer className="bg-[#74c7bf] text-[#fafafa] py-4 w-full">
			<div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4">
				{/* Logo y derechos */}
				<div className="text-center md:text-left">
					<h2 className="text-lg font-bold">MediConnect</h2>
					<p className="text-md">
						© {new Date().getFullYear()}, All Rights Reserved
					</p>
				</div>

				{/* Links */}
				<nav className="flex flex-wrap justify-center md:justify-end gap-4 text-md">
					{footerLinks.map((link) => (
						<a
							key={link.id}
							href={link.href}
							className="hover:underline hover:text-[#212121] transition-colors"
						>
							{link.title}
						</a>
					))}
				</nav>
			</div>
		</footer>
	);
};

export default Footer;
