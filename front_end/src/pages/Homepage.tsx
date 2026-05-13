import { Container } from "../components/Container";
import heroImage from "../assets/hero.png"
import reactImage from "../assets/react.svg"
import viteImage from "../assets/vite.svg"
import { ServiceCard } from "../components/ServiceCard";
import { ProjectCard } from "../components/ProjectCard";


const Homepage = () => {
  return (
    <div className="min-h-screen">
      {/* Seccion Hero */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

            {/* Texto y Botones */}
            <div className="text-center md:text-left flex flex-col items-center md:items-start">
              <h1 className="text-slate-950 text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
                Resolviendo <span className="text-brand-primary">problemas</span> complejos a través...
              </h1>
              <p className="mt-6 text-xl text-slate-400 max-w-xl">
                Front-End & Back-End Developer, Diseñador UX/UI apasionado por crear soluciones digitales escalables.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-brand-primary text-slate-950 rounded-full text-lg font-semibold hover:bg-brand-primary-hover transition-all">
                  Mi portafolio
                </button>
                <button className="px-8 py-4 bg-white text-slate-950 rounded-full text-lg font-semibold hover:bg-slate-200 transition-all border border-slate-300">
                  Ver CV
                </button>
              </div>
            </div>

            {/* Imagen con el efecto de fondo */}
            <div className="relative flex justify-center md:justify-end">
              {/* Fondo decorativo (círculo difuminado) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl opacity-50" />

              <div className="relative p-2 border border-slate-700/50 rounded-3xl bg-slate-800/30 backdrop-blur-sm shadow-2xl">
                <img
                  src={heroImage}
                  alt="Escritorio de trabajo moderno"
                  className="rounded-2xl w-full max-w-lg"
                />
              </div>
            </div>

          </div>
        </Container>
      </section>
      {/* SECCIÓN "SOBRE MÍ" */}
      <section className="bg-[#e9e9e9] py-24 border-t border-slate-100">
        <Container>
          {/* Encabezado de sección */}
          <div className="flex flex-col items-center mb-20">
            <span className="text-brand-primary font-bold tracking-[0.2em] text-xs uppercase mb-2">
              Sobre mí
            </span>
            <div className="w-12 h-[1px] bg-brand-primary"></div>
          </div>

          {/* Grid de Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
            <ServiceCard
              icon={<span className="text-xl">👥</span>}
              title="Quién soy"
              description="No soy solo un desarrollador; soy un arquitecto de experiencias. Mi identidad profesional se forja en la intersección de la lógica algorítmica y la estética editorial."
            />
            <ServiceCard
              icon={<span className="text-xl">🧠</span>}
              title="Cómo pienso"
              description="Abordo cada desafío desglosándolo en sus componentes atómicos. Mi enfoque prioriza la escalabilidad técnica sin comprometer nunca la intención emocional del diseño."
            />
            <ServiceCard
              icon={<span className="text-xl">♾️</span>}
              title="Qué combino"
              description="Integro el rigor de las estructuras de datos con la fluidez de las rejillas tipográficas. El resultado son productos que no solo funcionan, sino que cuentan una historia coherente."
            />
          </div>
        </Container>
      </section>
      <section className="py-24 bg-slate-50">
        <Container>
          {/* Encabezado con Buscador */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Proyectos destacados</h2>
              <p className="text-slate-500 max-w-md">
                Una selección curada de trabajos que demuestran mi pensamiento dual.
              </p>
            </div>

            {/* Input de Buscador */}
            <div className="relative w-full md:w-64 group">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-primary transition-colors">🔍</span>
              <input
                type="text"
                placeholder="Buscar"
                className="w-full pl-10 pr-4 py-2 bg-slate-100 border border-transparent rounded-full text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 outline-none transition-all"
              />
            </div>
          </div>

          {/* Grid de Proyectos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">

            {/* Columna Izquierda */}
            <div className="flex flex-col">
              <ProjectCard
                categoryTag="Proyectos Programación"
                categoryColor="yellow"
                image={reactImage} // Aquí tus imágenes
                title="Nexus Data Interface"
                tags={["React", "Rust"]}
                problem="Latencia crítica en visualización de datos en tiempo real."
                result="Reducción del 60% en el tiempo de renderizado."
              />
              <ProjectCard
                categoryTag="Proyectos Programación" // Solo se muestra en la primera de la serie
                categoryColor="yellow"
                image={reactImage}
                title="Arkhon Core"
                tags={["Go", "Kubernetes"]}
                problem="Inconsistencia en despliegues globales."
                result="Implementación de orquestación automatizada con 99.9% de uptime."
              />
            </div>

            {/* Columna Derecha */}
            <div className="flex flex-col md:mt-20"> {/* El margen superior crea el efecto visual */}
              <ProjectCard
                categoryTag="Proyectos Artística"
                categoryColor="black"
                image={viteImage}
                title="Mono Identity"
                tags={["Branding"]}
                problem="Marca genérica sin diferenciación emocional."
                result="Identidad visual audaz basada en tipografía brutalista."
              />
              <ProjectCard
                categoryTag="Proyectos Artística"
                categoryColor="black"
                image={viteImage}
                title="Ether Frame"
                tags={["UI Motion"]}
                problem="Interacciones de usuario estáticas y aburridas."
                result="Librería de componentes animados que mejoró el time-on-page en 25%."
              />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Homepage;