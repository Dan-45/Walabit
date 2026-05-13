import { Container } from "./Container";

export const Footer = () => {
  return (

    <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
      <Container>
        {/* FILA SUPERIOR: Logo, Navegación y RRSS */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 pb-16">
          {/* Bloque Izquierdo: Texto */}
          <div className="max-w-xs">
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              The Editorial Engineer
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Combinando la precisión del código con la elegancia del diseño editorial.
            </p>
          </div>
          {/* Bloque Derecho: Iconos Redondos */}
          <div className="flex gap-8 text-sm font-medium text-slate-400">
            <a href="#" className="hover:text-brand-primary border-b-2 border-brand-primary pb-1">Inicio</a>
            <a href="#" className="hover:text-brand-primary transition-colors">Sobre mí</a>
            <a href="#" className="hover:text-brand-primary transition-colors">Proyectos</a>
            <a href="#" className="hover:text-brand-primary transition-colors">Contacto</a>
          </div>
          {/* Bloque Derecho: Iconos Redondos */}
          <div className="flex gap-4">
            <button className="w-12 h-12 rounded-full bg-gray-300 shadow-sm flex items-center justify-center border border-slate-100 hover:shadow-md transition-shadow">
              <span>📇</span>
            </button>
            <button className="w-12 h-12 rounded-full bg-black shadow-sm flex items-center justify-center border border-slate-100 hover:shadow-md transition-shadow">
              <span>@</span>
            </button>
          </div>
        </div>
        {/* LÍNEA DIVISORIA */}
        <div className="w-full h-px bg-slate-200 mb-8" />
        {/* LÍNEA DIVISORIA */}
        <div className="text-center">
          <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-medium">
            © 2024 Editorial Engineer Portfolio. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};