import type { ReactNode } from 'react';

interface ServiceCardProps {
    icon: ReactNode;
    title: string;
    description: string;
}

export const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
    return (
        <div className="flex flex-col items-start text-left group">
            {/* Contenedor del Icono */}
            <div className="w-12 h-12 bg-white shadow-sm border border-slate-100 rounded-lg flex items-center justify-center text-brand-primary mb-6 transition-transform group-hover:scale-110">
                {icon}
            </div>
            
            {/* Título */}
            <h3 className="text-2xl font-bold text-slate-800 mb-4 tracking-tight">
                {title}
            </h3>
            
            {/* Descripción */}
            <p className="text-slate-500 leading-relaxed text-sm lg:text-base">
                {description}
            </p>
        </div>
    );
};