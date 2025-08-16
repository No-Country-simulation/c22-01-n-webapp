import Link from "next/link";
import { navigationLinks } from "@/data/appData";

const Header = () => {
	return (
		<header className="bg-cyan-600 p-4 shadow-lg w-full">
			<div className="container mx-auto flex flex-col md:flex-row items-center md:justify-between gap-4">
				{/* Logo */}
				<div className="text-center md:text-left">
					<h1 className="text-2xl md:text-3xl font-bold text-white text-center md:text-left">
						MediConnect
					</h1>
				</div>

				{/* Links */}
				<nav className="flex md:flex-row items-center gap-2 md:gap-0">
					{navigationLinks.map((link) => (
						<Link key={link.id} href={link.href} className="mx-0 md:mx-2">
							<button className="p-2 w-full md:w-auto bg-cyan-600 hover:bg-cyan-700 text-white border border-white/30 rounded-md shadow-lg transition-all">
								{link.title}
							</button>
						</Link>
					))}
				</nav>
			</div>
		</header>
	);
};

export default Header;
