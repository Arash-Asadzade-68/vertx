import { LayoutDashboard } from 'lucide-react';
import { ChartNoAxesCombined } from 'lucide-react';
import Earth  from '@/assets/world.svg?react';
import { Bell } from 'lucide-react';
import { Snowflake } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


const navigationItems = [
  {
    id:'1',
    title:'Dashboard',
    path:'/',
    icon:<LayoutDashboard  width={24} height={24} fill='#ffffff'/>,
  },
  {
    id:'2',
    title:'Analytics',
    path:'/analytics',
    icon:<ChartNoAxesCombined  width={24} height={24} fill='#ffffff'/>,
  },
  {
    id:'3',
    title:'Connect',
    path:'/connect',
    icon:<Earth width={18} height={18} fill='#ffffff'/>,
  },
  {
    id:'4',
    title:'Activity',
    path:'',
    icon:<Bell width={24} height={24} fill='#ffffff'/>,
  },
  {
    id:'5',
    title:'Dealroom',
    path:'/dealroom',
    icon:<Snowflake width={24} height={24} fill='#ffffff'/>,
  },
]

export function MobileNavigation() {
  const navigate = useNavigate();
  return (
    <div className="absolute bottom-0 left-0 right-0 w-full bg-black min-h-[60px] xl:hidden flex flex-row justify-between px-4">
       {navigationItems.map(item => <div className='w-10 flex gap-1 justify-center flex-col items-center cursor-pointer' key={item.id} onClick={()=>navigate(item.path)}>
        {item.icon}
        <p className='text-white text-[8px] font-semibold'>{item.title}</p>
       </div> )}
    </div>
  )
}
