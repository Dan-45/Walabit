const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="mb-4 text-gray-400">© 2026 - Desarrollado por Tu Nombre</p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="hover:text-blue-400">GitHub</a>
          <a href="#" className="hover:text-blue-400">LinkedIn</a>
          <a href="#" className="hover:text-blue-400">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;