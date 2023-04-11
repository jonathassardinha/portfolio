import { HTMLAttributes } from "react";

export function Button(props: HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="w-fit text-primary-main border-primary-main border rounded-full py-4 px-8 mt-16 font-bold tracking-wide hover:bg-primary-main hover:text-secondary-main transition-all active:bg-primary-dark active:border-primary-dark"
      {...props}
    ></button>
  );
}
