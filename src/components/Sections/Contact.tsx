import { useIntersectedNav } from "../../hooks/useIntersectedNav";
import { SectionProps } from "../../types";

export function Contact({
  setNavState,
  shouldChangeOnIntersect,
}: SectionProps) {
  const contactIntersectRefCb = useIntersectedNav(() => {
    if (shouldChangeOnIntersect.current) {
      setNavState("contact");
    }
  });

  return (
    <>
      <div ref={contactIntersectRefCb} id="contact" />
      <div className="h-full bg-green-800 sticky top-0 z-[4] flex-grow flex-shrink-0 basis-full">
        Contact
      </div>
    </>
  );
}
