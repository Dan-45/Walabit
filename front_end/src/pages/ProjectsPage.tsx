import { Link } from 'react-router-dom';
import { Container } from '../components/Container';


export const ProjectsPage = () => {
  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* SIDEBAR - Panel Izquierdo */}
      <aside className="w-64 bg-slate-900 text-white hidden md:flex flex-col p-6">
        <h2 className="text-xl font-bold mb-10 text-brand-primary">Admin Panel</h2>
        <nav className="space-y-4 flex-1">
          <a href="#" className="block p-3 rounded-lg hover:bg-slate-800 transition-colors">Dashboard</a>
          <a href="#" className="block p-3 rounded-lg hover:bg-slate-800 transition-colors">Proyectos</a>
          <a href="#" className="block p-3 rounded-lg hover:bg-slate-800 transition-colors">Mensajes</a>
          <a href="#" className="block p-3 rounded-lg hover:bg-slate-800 transition-colors">Configuración</a>
        </nav>
        <Link to="/" className="text-sm text-slate-400 hover:text-white text-left">
          Cerrar Sesión
        </Link>
      </aside>

      {/* CONTENIDO PRINCIPAL */}
      <main className="flex-1 p-8">
        <Container>
          <header className="flex justify-between items-center mb-10">
            <h1 className="text-3xl font-extrabold text-slate-900">Gestión de Portafolio</h1>
            <button className="bg-brand-primary text-slate-950 px-6 py-2 rounded-full font-bold shadow-md hover:scale-105 transition-transform">
              + Nuevo Proyecto
            </button>
          </header>

          {/* TABLA O LISTA DE PROYECTOS (Simulada) */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-slate-100 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4 text-sm font-bold text-slate-600">Proyecto</th>
                  <th className="px-6 py-4 text-sm font-bold text-slate-600">Categoría</th>
                  <th className="px-6 py-4 text-sm font-bold text-slate-600">Estado</th>
                  <th className="px-6 py-4 text-sm font-bold text-slate-600">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-slate-900">The Editorial Engineer</td>
                  <td className="px-6 py-4 text-slate-500 text-sm">Desarrollo Web</td>
                  <td className="px-6 py-4"><span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">Publicado</span></td>
                  <td className="px-6 py-4 text-sm text-brand-primary-hover font-bold cursor-pointer">Editar</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Container>
      </main>
    </div>
  );
};