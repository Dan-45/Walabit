import { Link } from 'react-router-dom';
import { Container } from './Container';


export const Navbar = () => {
  return (
    <nav className="border-b border-slate-300 bg-slate-100 py-4 sticky top-0 z-50">
      <Container className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center font-bold text-slate-950">
            T
          </div>
          <span className="text-xl font-bold tracking-tight text-black">
            <span className="text-brand-primary">The</span> Artificial Engineer
          </span>
        </div>


        {/* Botón CTA y Menú Móvil */}  
        <div className="flex items-center gap-3">
          {/* Enlaces - Ocultos en móvil, flex en escritorio */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-black">
            <Link to="/" className="hover:text-brand-primary transition-colors">Inicio</Link>
            <Link to="#" className="hover:text-brand-primary transition-colors">Sobre mí</Link>
            <Link to="#" className="hover:text-brand-primary transition-colors">Proyectos</Link>
          </div>
          <Link to="#" className="hidden sm:block px-5 py-2.5 bg-amber-900 text-white rounded-full text-sm font-semibold hover:bg-amber-700 transition-colors">
              Contacto
          </Link>
          <Link to="/login" className="hidden sm:block px-5 py-2.5 bg-brand-primary text-slate-950 rounded-full text-sm font-semibold hover:bg-brand-primary-hover transition-colors">
              Iniciar Sesión
          </Link>
          
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