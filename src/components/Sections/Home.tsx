import { Transition } from "@headlessui/react";
import { useIntersectedNav } from "../../hooks/useIntersectedNav";
import { SectionProps } from "../../types";
import { Fragment, useState } from "react";

export function Home({ setNavState, shouldChangeOnIntersect }: SectionProps) {
	const [imageLoaded, setImageLoaded] = useState(false);

	const homeIntersectRefCb = useIntersectedNav(() => {
		if (shouldChangeOnIntersect.current) {
			setNavState("home");
		}
	});

	return (
		<>
			<div id="home" ref={homeIntersectRefCb} />
			<div className="h-full bg-green-200 sticky top-0 z-[1] flex-grow flex-shrink-0 basis-full">
				<img
					alt="profile picture"
					src="/profile-pic-small.webp"
					onLoad={() => setImageLoaded(true)}
				/>
				<Transition
					show={!imageLoaded}
					leaveFrom="scale-x-100"
					leaveTo="scale-x-0"
					as={Fragment}
				>
					<div className="absolute inset-0 bg-secondary-main origin-left duration-1000 transition-all ease-in-out delay-300" />
				</Transition>
			</div>
		</>
	);
}
