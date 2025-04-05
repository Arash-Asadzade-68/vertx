import { useNavigate } from "react-router-dom";
import { menuItems } from "./menu-items";
import { TMenuItem } from "./types";
import { useDispatch, useSelector } from "react-redux";
import { selectPageTitle, setPageTitle } from "@/store/page-title/page-title-slice";
import clsx from "clsx";

interface ISidebar{
  setOpen?:(open:boolean) => void;
}

export  function Sidebar({setOpen}:ISidebar) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const title = useSelector(selectPageTitle);

  return (
    <section className="py-[18px] px-[23px] text-[#555555] flex flex-col gap-[30px] min-w-[190px] h-full border-r border-[#555555] bg-black">
        {
          menuItems.map((menuItem :TMenuItem ) => <p key={menuItem.id} className={
            clsx("text-base font-bold hover:text-white active:text-white transition-all ease-in-out cursor-pointer",
              title  === menuItem.title && 'text-white'
            )
          } onClick={()=>{
            dispatch(setPageTitle(menuItem.title));
            navigate(menuItem.path);
            setOpen?.(false)
          }}>
            {menuItem.title}
          </p> )
        }
    </section>
  )
}
