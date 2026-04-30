import { cn } from '../lib/utils';

interface CardProps {
  title: string;
  description: string;
  className?: string; // Para permitir estilos extra desde fuera
}

export const Card = ({ title, description, className }: CardProps) => {
  return (
    <div className={cn(
      // Estructura base
      "group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6",
      // Efectos Hover (Elegantes)
      "transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10",
      // Dark Mode (opcional pero profesional)
      "dark:bg-slate-900 dark:border-slate-800",
      className
    )}>
      
      <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-indigo-500/5 transition-transform group-hover:scale-150" />

      <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 group-hover:text-indigo-600 transition-colors">
        {title}
      </h3>
      
      <p className="mt-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
        {description}
      </p>

      <div className="mt-6 flex items-center text-sm font-medium text-indigo-600">
        Ver detalles
        <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
      </div>
    </div>
  );
};