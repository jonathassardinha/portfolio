import { Dispatch, MutableRefObject, SetStateAction } from "react";

export type NavState = "home" | "about" | "projects" | "contact";

export type SectionProps = {
  setNavState: Dispatch<SetStateAction<NavState>>;
  shouldChangeOnIntersect: MutableRefObject<boolean>;
};
