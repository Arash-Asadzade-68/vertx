import { lazy } from "react";
import { TMenuItem } from "./types";

const Dashboard = lazy(() =>
  import('@/pages/dashboard').then((module) => ({
    default: module.Dashboard,
  }))
);
const Profile = lazy(() =>
  import('@/pages/profile').then((module) => ({
    default: module.Profile,
  }))
);
const Analytics = lazy(() =>
  import('@/pages/analytics').then((module) => ({
    default: module.Analytics,
  }))
);
const Connect = lazy(() =>
  import('@/pages/connect').then((module) => ({
    default: module.Connect,
  }))
);
const Settings = lazy(() =>
  import('@/pages/settings').then((module) => ({
    default: module.Settings,
  }))
);
const Dealroom = lazy(() =>
  import('@/pages/dealroom').then((module) => ({
    default: module.Dealroom,
  }))
);

export const menuItems:TMenuItem[] = [
  {
    id:'1',
    title:'Dashboard',
    path:'/',
    icon:'',
    Component:Dashboard
  },
  {
    id:'2',
    title:'Analytics',
    path:'/analytics',
    icon:'',
    Component:Analytics
  },
  {
    id:'3',
    title:'Connect',
    path:'/connect',
    icon:'',
    Component:Connect
  },
  {
    id:'4',
    title:'Dealroom',
    path:'/dealroom',
    icon:'',
    Component:Dealroom
  },
  {
    id:'5',
    title:'Profile',
    path:'/profile',
    icon:'',
    Component:Profile
  },
  {
    id:'6',
    title:'Settings',
    path:'/settings',
    icon:'',
    Component:Settings
  },
]
