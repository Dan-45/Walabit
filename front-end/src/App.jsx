import Navbar from "./components/Nabvar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="pt-20 px-4 max-w-6xl mx-auto">
        <section id="proyectos" className="py-20">
          <h2 className="text-3xl font-bold mb-8">Mis Proyectos</h2>
          <div className="bg-white p-10 rounded-xl shadow-sm border">
            <p className="text-gray-500">Aquí empezaremos a mapear tus proyectos mañana...</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App