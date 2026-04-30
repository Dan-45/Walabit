import { Container } from './Container';

export const Navbar = () => {
  return (
    <nav className="border-b border-slate-800 bg-brand-bg py-4 sticky top-0 z-50">
      <Container className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center font-bold text-slate-950">
            T
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            <span className="text-brand-primary">The</span> Artificial Engineer
          </span>
        </div>

        {/* Enlaces - Ocultos en móvil, flex en escritorio */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          <a href="#" className="hover:text-brand-primary transition-colors">Start</a>
          <a href="#" className="hover:text-brand-primary transition-colors">About</a>
          <a href="#" className="hover:text-brand-primary transition-colors">Portafolio</a>
          <a href="#" className="hover:text-brand-primary transition-colors">Servicios</a>
        </div>

        {/* Botón CTA y Menú Móvil */}
        <div className="flex items-center gap-3">
          <button className="hidden sm:block px-5 py-2.5 bg-brand-primary text-slate-950 rounded-full text-sm font-semibold hover:bg-brand-primary-hover transition-colors">
            Get in touch
          </button>
          
          {/* Icono de Menú para móvil */}
          <button className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white">
            {/* Reemplaza con un icono de Lucide o SVG */}
            <span className="text-2xl">☰</span> 
          </button>
        </div>
      </Container>
    </nav>
  );
};