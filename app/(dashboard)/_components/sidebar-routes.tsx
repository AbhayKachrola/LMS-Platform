"use client";

import { BarChart, Compass, Layout, List, Users } from "lucide-react";
import { SidebarItem } from "./sidebar-item";
import { usePathname } from "next/navigation";

const guestRoutes = [
    {
        icon: Layout,
        label: "Dashboard",
        href: "/",
    },
    {
        icon: Compass,
        label: "Browse",
        href: "/search",
    },
] 

const teacherRoutes = [
    {
        icon: List,
        label: "Courses",
        href: "/teacher/courses",
    },
    {
        icon: BarChart,
        label: "Analytics",
        href: "/teacher/analytics",
    },
    {
        icon: Users,
        label: "Manage Users",
        href: "/teacher/users",
    }
]


export const SidebarRoutes = () => {
    // const routes = guestRoutes;

    const pathname = usePathname();
    
    const isTeacherPage = pathname?.startsWith("/teacher");

    const routes = isTeacherPage ? teacherRoutes : guestRoutes;


    return (
        <div className="flex flex-col w-full">
            {routes.map((route)=> (
                <SidebarItem
                    key = {route.href}
                    icon = {route.icon}
                    label = {route.label}
                    href = {route.href}
                />
            ))}
            
        </div>
    )
}