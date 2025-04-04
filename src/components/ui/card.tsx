import clsx from "clsx";

interface ICard {
  children:React.ReactNode;
  rootClassName?:string
}
export function Card({children, rootClassName}:ICard) {
  return (
    <div className={
      clsx("text-white rounded-[8px] p-4 border border-[#555555] bg-black",
        rootClassName
      )
    }>
       {children}
    </div>
  )
}
