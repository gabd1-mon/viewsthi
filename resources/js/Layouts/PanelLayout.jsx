import { useState } from "react";
import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems, SidebarLogo } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards, HiMenu } from "react-icons/hi";

export default function PanelLayout({ children }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex min-h-screen">
            {/* Botão para abrir/fechar */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed top-4 left-4 z-50 p-2 rounded-md bg-white shadow-md text-gray-600 hover:bg-gray-100"
            >
                <HiMenu className="w-6 h-6" />
            </button>

            {/* Overlay escuro ao abrir no mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-30 bg-black bg-opacity-50"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar */}
            <div className={`fixed z-40 top-0 left-0 h-full transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <Sidebar aria-label="Sidebar">
                    <div className="pt-14"></div>
                    <SidebarLogo href="#" >
                        Viewsthi
                    </SidebarLogo>
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

            {/* Conteúdo da página */}
            <main className="flex-1 p-6 pl-16 bg-gray-50">
                {children}
            </main>
        </div>
    );
}