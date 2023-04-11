import {
	Dispatch,
	Fragment,
	MouseEventHandler,
	MutableRefObject,
	SetStateAction,
	useEffect,
	useState,
} from "react";
import { NavState } from "../../types";
import { Transition } from "@headlessui/react";
import { useDelayedShow } from "../../hooks/useDelayedShow";

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
	const show = useDelayedShow();

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
			<Transition
				show={show}
				appear
				enter="transition-all duration-500"
				enterFrom="-translate-y-2 opacity-0"
				enterTo="-translate-y-0 opacity-100"
			>
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
			</Transition>
		</nav>
	);
}
