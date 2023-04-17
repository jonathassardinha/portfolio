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
			<div className="h-full p-20 bg-white sticky top-0 z-[2] flex-grow flex-shrink-0 basis-full">
				<h2 className="text-3xl mb-8">About me</h2>
				<h3 className="text-xl">
					Currenty working as a{" "}
					<span className="font-semibold text-primary-dark">team lead</span> in
					a banking application, I'm specialized in delivering complex and
					design-heavy applications with great performance and high fidelity to
					the designs.
				</h3>
				<h3 className="text-2xl font-bold mt-12">Main skills</h3>
				<span className="mt-4 inline-block font-semibold text-lg">
					Technical
				</span>
				<p className="mt-2">
					Focused in React.js and Next.js with Typescript, but, familiar with
					other frontend technologies like Angular and Vue.
				</p>
				<span className="mt-8 inline-block font-semibold text-lg">
					Relational
				</span>
				<p className="mt-2">
					Used to leading technical teams and being responsible for handling
					client relationships
				</p>
			</div>
		</>
	);
}
