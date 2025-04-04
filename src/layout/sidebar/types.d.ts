export type TMenuItem  = {
  id:string,
  title:string,
  path:string,
  icon:React.ReactNode,
  Component:React.LazyExoticComponent<() => JSX.Element>,
}