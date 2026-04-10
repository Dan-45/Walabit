const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <span className="text-xl font-bold text-blue-600">DS.dev</span>
        <div className="space-x-6 text-gray-600 font-medium">
          <a href="#proyectos" className="hover:text-blue-500 transition">Proyectos</a>
          <a href="#sobre-mi" className="hover:text-blue-500 transition">Sobre mí</a>
          <a href="#contacto" className="hover:text-blue-500 transition">Contacto</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;