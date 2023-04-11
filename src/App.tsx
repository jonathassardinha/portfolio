// https://michaelpumo.com/

import { Fragment, useRef, useState } from "react";
import { Button } from "./components/Button";
import { Navbar } from "./components/Navbar";
import { About, Contact, Home, Projects } from "./components/Sections";
import { NavState } from "./types";
import { useDelayedShow } from "./hooks/useDelayedShow";
import { Transition } from "@headlessui/react";

function App() {
	const show = useDelayedShow();
	const [navState, setNavState] = useState<NavState>("home");
	const shouldChangeOnIntersect = useRef(true);

	return (
		<div className="h-full grid overflow-hidden grid-cols-2">
			<header className=" h-full pl-16 pr-24 py-9 flex flex-col justify-center bg-secondary-main relative">
				<Navbar
					navState={navState}
					setNavState={setNavState}
					shouldChangeOnIntersect={shouldChangeOnIntersect}
				/>
				<Transition
					show={show}
					appear
					enter="transition-all delay-200 duration-700"
					enterFrom="-translate-y-2 opacity-0"
					enterTo="-translate-y-0 opacity-100"
				>
					<h1 className="text-primary-main text-4xl font-bold leading-[3rem] whitespace-pre-line">
						<span>Hello. I develop</span>
						<span className="font-thin italic text-primary-light">
							{" incredible"}
						</span>
						<span>{"\nuser experiences"}</span>
					</h1>
					<h2 className="text-primary-main text-base mt-8">
						My name's Jonathas Sardinha. I craft user interfaces using modern
						frontend web technologies.
					</h2>
					<Button>Let's work together!</Button>
				</Transition>
			</header>
			<main className=" h-full overflow-auto relative flex flex-col">
				<Home
					setNavState={setNavState}
					shouldChangeOnIntersect={shouldChangeOnIntersect}
				/>
				<About
					setNavState={setNavState}
					shouldChangeOnIntersect={shouldChangeOnIntersect}
				/>
				<Projects
					setNavState={setNavState}
					shouldChangeOnIntersect={shouldChangeOnIntersect}
				/>
				<Contact
					setNavState={setNavState}
					shouldChangeOnIntersect={shouldChangeOnIntersect}
				/>
			</main>
		</div>
	);
}

export default App;
