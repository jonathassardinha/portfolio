import {
	Dispatch,
	MouseEventHandler,
	MutableRefObject,
	SetStateAction,
	useState,
} from "react";
import { NavState } from "../../types";

const getNavClass = (navState: NavState, targetState: NavState) => {
	if (navState === targetState) return "text-primary-dark font-semibold";
	return "text-primary-light font-semibold";
};

export type NavbarProps = {
	navState: NavState;
	setNavState: Dispatch<SetStateAction<NavState>>;
	shouldChangeOnIntersect: MutableRefObject<boolean>;
};

export function Navbar({
	navState,
	setNavState,
	shouldChangeOnIntersect,
}: NavbarProps) {
	const onClick: MouseEventHandler<HTMLAnchorElement> = (event) => {
		const href = (event.target as HTMLAnchorElement).href;
		const targetState = href.split("#").at(-1);

		setNavState(targetState as NavState);
		shouldChangeOnIntersect.current = false;
		setTimeout(() => {
			shouldChangeOnIntersect.current = true;
		}, 200);
	};

	return (
		<nav className="absolute inset-0 bottom-auto">
			<ul className="flex gap-8 pl-16 py-6">
				<li className={getNavClass(navState, "home")}>
					<a href="#home" onClick={onClick}>
						Home
					</a>
				</li>
				<li className={getNavClass(navState, "about")}>
					<a href="#about" onClick={onClick}>
						About
					</a>
				</li>
				<li className={getNavClass(navState, "projects")}>
					<a href="#projects" onClick={onClick}>
						Projects
					</a>
				</li>
				<li className={getNavClass(navState, "contact")}>
					<a href="#contact" onClick={onClick}>
						Contact
					</a>
				</li>
			</ul>
		</nav>
	);
}
