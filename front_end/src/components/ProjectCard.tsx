import { cn } from "../lib/utils";

interface ProjectCardProps {
    image: string;
    title: string;
    tags: string[];
    problem: string;
    result: string;
    categoryTag: string;
    categoryColor: string;
}

export const ProjectCard = ({
    image, title, tags, problem, result, categoryTag, categoryColor
}: ProjectCardProps) => {
    return (
        <div className="flex flex-col mb-12 group">
            {/* Badge de Categoría superior */}
            <div className={cn("inline-block self-start px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-4",
                categoryColor === 'yellow' ? "bg-brand-primary text-slate-950" : "bg-slate-900 text-white"
            )}>{categoryTag}</div>


            {/* Contenedor de Imagen */}
            <div className="overflow-hidden rounded-2xl mb-6 bg-slate-200">
                <img src={image} alt={title} className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>

            {/* Info del Proyecto */}
            <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
                <div className="flex gap-2">
                    {tags.map(tag => (<span key={tag} className="text-[10] font-medium bg-slate-100 text-slate-500 px-2 py-1 rounded uppercase">{tag}</span>))}
                </div>
            </div>

            {/* Detalles Técnicos */}
            <div className="space-y-2 mt-2">
                <p className="text-[11px] font-bold text-brand-primary-hover uppercase tracking-tight">
                    PROBLEMA: <span className="text-slate-700 font-medium normal-case">{problem}</span>
                </p>
                <p className="text-sm text-slate-500">
                    <span className="font-semibold text-slate-700">Result:</span>{result}
                </p>
            </div>
        </div>

    );
};