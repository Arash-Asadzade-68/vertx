import { LazyLoadComponent } from "@/components/lazy-load-component/lazy-load-component";
import { Content } from "@/layout/content";
import { MobileNavigation } from "@/layout/mobile-navigation";
import { Navbar } from "@/layout/navbar";
import { Sidebar } from "@/layout/sidebar";
import { menuItems } from "@/layout/sidebar/menu-items";
import { Users } from "@/layout/users";
import { Route, Routes as ReactRouterRoutes } from 'react-router';


export function Routes() {
  return (
    <main className="flex flex-col h-full">
      <Navbar />
      <section className="flex flex-row h-full flex-1 w-full">
        <div className="max-sm:hidden flex flex-row h-full">
          <Users />
          <Sidebar />
        </div>
        <Content>
          <ReactRouterRoutes>
            {
              menuItems.map(({ path, Component }) => <Route
                path={path}
                element={<LazyLoadComponent Component={<Component />} />}
              />)
            }
          </ReactRouterRoutes>
        </Content>
        <MobileNavigation/>
      </section>
    </main>
  )
}
