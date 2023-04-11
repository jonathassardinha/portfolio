import { useIntersectedNav } from "../../hooks/useIntersectedNav";
import { SectionProps } from "../../types";

export function Projects({
  setNavState,
  shouldChangeOnIntersect,
}: SectionProps) {
  const projectsIntersectRefCb = useIntersectedNav(() => {
    if (shouldChangeOnIntersect.current) {
      setNavState("projects");
    }
  });

  return (
    <>
      <div ref={projectsIntersectRefCb} id="projects" />
      <div className="h-full bg-green-600 sticky top-0 z-[3] flex-grow flex-shrink-0 basis-full">
        Projects
      </div>
    </>
  );
}
