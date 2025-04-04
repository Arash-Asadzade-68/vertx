import clsx from "clsx";

interface ITag{
  title:string;
  bgClassName:string;
  textColor:string
}
export default function Tag({bgClassName,textColor, title}:ITag) {
  return (
    <div className={clsx(
      "py-[1px] px-[5px] rounded-[2px] w-fit text-[8px] font-medium",
      bgClassName,
      textColor
    )}>{title}</div>
  )
}
