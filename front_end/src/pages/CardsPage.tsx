import { Card } from '../components/Card';
import { Link } from 'react-router-dom';

const CardsPage = () => {
  return (
    <div className="p-8">
      <Link to="/" className="text-indigo-600 hover:underline mb-8 block">
        ← Volver al inicio
      </Link>
      <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Nuestros Proyectos
          </h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Explora nuestra colección de trabajos realizados con la mayor precisión técnica.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Card title="E-commerce Pro" description="Plataforma de ventas de alto rendimiento."/>
          <Card title="SaaS Dashboard" description="Analíticas en tiempo real para empresas B2B."/>
          <Card title="Mobile App" description="Interfaz fluida para dispositivos iOS y Android."/>
        </div>
      </div>
    </main>
    </div>
  );
};

export default CardsPage;