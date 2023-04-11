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
      <div className="h-full bg-green-400 sticky top-0 z-[2] flex-grow flex-shrink-0 basis-full">
        About
      </div>
    </>
  );
}
