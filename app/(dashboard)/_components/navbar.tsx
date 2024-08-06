import { NavbarRoutes } from "@/components/navbar-routes"
import { MobileSidebar } from "./mobile-sidebar"

export const Navbar = () => {
    return(
        <div className="p-4 border-b h-full flex items-center bg-white  text-gray-900 dark:bg-white dark:text-gray-900 shadow-sm" >

            <MobileSidebar/>
            <NavbarRoutes/>
        </div>
    )
}