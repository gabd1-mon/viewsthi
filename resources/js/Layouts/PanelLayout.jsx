import { useState, useEffect } from "react";
import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems, SidebarLogo } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards, HiMenu, HiSun, HiMoon } from "react-icons/hi";

export default function PanelLayout({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const [dark, setDark] = useState(false);

    useEffect(() => {
        if (dark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [dark]);

    return (
        <div className="flex min-h-screen bg-white dark:bg-black transition-colors duration-300">

            {/* Botão hamburguer */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed top-4 left-4 z-50 p-2 rounded-md bg-gray-100 dark:bg-gray-900 shadow-md text-gray-600 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800"
            >
                <HiMenu className="w-6 h-6" />
            </button>

            {/* Botão dark/light */}
            <button
                onClick={() => setDark(!dark)}
                className="fixed top-4 right-4 z-50 p-2 rounded-md bg-gray-100 dark:bg-gray-900 shadow-md text-gray-600 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800"
            >
                {dark ? <HiSun className="w-6 h-6" /> : <HiMoon className="w-6 h-6" />}
            </button>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-30 bg-black bg-opacity-60"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar */}
            <div className={`fixed z-40 top-0 left-0 h-full transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="h-full bg-gray-950 text-white">
                    <Sidebar aria-label="Sidebar" className="h-full bg-gray-950 text-black dark:text-white">
                        <div className="pt-14">
                            <SidebarLogo href="#" img="/favicon.ico" imgAlt="Logo">
                                Viewsthi
                            </SidebarLogo>
                        </div>
                        <SidebarItems>
                            <SidebarItemGroup>
                                <SidebarItem href="#" icon={HiChartPie}>Dashboard</SidebarItem>
                                <SidebarItem href="#" icon={HiViewBoards}>Kanban</SidebarItem>
                                <SidebarItem href="#" icon={HiInbox}>Inbox</SidebarItem>
                                <SidebarItem href="#" icon={HiUser}>Users</SidebarItem>
                                <SidebarItem href="#" icon={HiShoppingBag}>Products</SidebarItem>
                                <SidebarItem href="#" icon={HiArrowSmRight}>Sign In</SidebarItem>
                                <SidebarItem href="#" icon={HiTable}>Sign Up</SidebarItem>
                            </SidebarItemGroup>
                        </SidebarItems>
                    </Sidebar>
                </div>
            </div>

            {/* Conteúdo */}
            <main className="flex-1 p-6 pl-16 text-gray-900 dark:text-white transition-colors duration-300">
                {children}
            </main>
        </div>
    );
}