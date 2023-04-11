import { useIntersectedNav } from "../../hooks/useIntersectedNav";
import { SectionProps } from "../../types";

export function About({ setNavState, shouldChangeOnIntersect }: SectionProps) {
	const aboutIntersectRefCb = useIntersectedNav(() => {
		if (shouldChangeOnIntersect.current) {
			setNavState("about");
		}
	});

	return (
		<>
			<div id="about" ref={aboutIntersectRefCb} />
			<div className="h-full p-20 bg-emerald-50 sticky top-0 z-[2] flex-grow flex-shrink-0 basis-full">
				<h2 className="text-3xl">About me</h2>
			</div>
		</>
	);
}
