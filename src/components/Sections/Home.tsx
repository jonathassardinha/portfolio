import { useIntersectedNav } from "../../hooks/useIntersectedNav";
import { SectionProps } from "../../types";

export function Home({ setNavState, shouldChangeOnIntersect }: SectionProps) {
  const homeIntersectRefCb = useIntersectedNav(() => {
    if (shouldChangeOnIntersect.current) {
      setNavState("home");
    }
  });

  return (
    <>
      <div id="home" ref={homeIntersectRefCb} />
      <div className="h-full bg-green-200 sticky top-0 z-[1] flex-grow flex-shrink-0 basis-full">
        Profile pic
      </div>
    </>
  );
}
