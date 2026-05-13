import { useState } from 'react';
import { LayoutDashboard, FolderKanban, BarChart3, Settings, LogOut } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Link } from 'react-router-dom';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}


export const Sidebar = () => {
    const [activeTab, setActiveTab] = useState('dashboard');

    const menuItems = [
        { name: 'Dashboard', icon: LayoutDashboard },
        { name: 'Projects', icon: FolderKanban },
        { name: 'Analytics', icon: BarChart3 },
        { name: 'Settings', icon: Settings },
    ];

    return (
        <div className='flex h-screen bg-slate-50'>
            {/* Sidebar estilos*/}
            <aside className='w-64 bg-white border-r border-slate-200 flex flex-col p-4'>
                <div className='p-6'>
                    <h1 className='text-xl font-bold text-slate-900'>Analytics</h1>
                </div>
                <nav className="flex-1 px-4 space-y-2">
                    {menuItems.map((item) => (
                        <button
                            key={item.name}
                            onClick={() => setActiveTab(item.name)}
                            className={cn(
                                "w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all",
                                activeTab === item.name
                                    ? "bg-brand-primary/10 text-brand-primary border-r-4 border-brand-primary"
                                    : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                            )}
                        >
                            <item.icon size={20} />
                            <span>{item.name}</span>
                        </button>
                    ))}
                </nav>
                <div className='p-4 border-t border-slate-100'>
                    <Link to="/" className='flex items-center space-x-3 px-4 text-slate-500 hover:text-red-600 transition-colors'>
                        <LogOut size={20} />
                        <span className='text-sm font-medium'>Cerrar sesión</span>
                    </Link>
                </div>
            </aside>

            {/* Contenido principal (Donde iran las graficas de tremor) */}
            <main className='flex-1 overflow-y-auto p-8'>
                    {/* Aquí puedes colocar el contenido principal de tu dashboard */}
            </main>
        </div>
    );
};