interface IIconLabel {
  title: string;
  tag?: React.ReactNode;
  icon?: React.ReactNode;
  subtitle?: string | React.ReactNode;
  description?: string
  link: string
}
export function IconLabel({ title, icon, subtitle, tag, link }: IIconLabel) {
  return (
    <div className="flex flex-row justify-between items-start">
      <div className="flex flex-row gap-2.5 items-center">
        <div className="bg-white rounded-[2px] w-8 h-8 flex items-center justify-center">
          {icon}
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex flex-row space-x-2 items-center">
            <p className="text-white text-sm font-bold">{title}</p>
            {tag && <div>
            {tag}
            </div>}
          </div>
          <p className="text-[10px] font-normal max-w-[184px] text-wrap break-all">{subtitle}</p>
        </div>
      </div>
      <p className="text-[8px] font-medium">{link}</p>
    </div>
  )
}
