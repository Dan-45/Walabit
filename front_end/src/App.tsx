import { Route, Routes, useLocation} from 'react-router-dom'
import Home from './pages/Homepage'
import { SingIn } from './pages/SignIn'
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import './index.css'

function App() {
  // Obtener la ubicación actual para poder usarla en el Navbar
  const location = useLocation();

  // 2. Definimos si queremos mostrar el Navbar y Footer
  // Si la ruta es '/login', esta variable será false
  const showLayout = location.pathname !== '/login';

  return (
    <>
      <div className='min-h-screen bg-slate-50'>
        {/* 3. Solo renderizamos el Navbar si no estamos en login */}
        {showLayout && <Navbar />}

        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<SingIn />} />
          </Routes>
        </main>

        {/* 4. Solo renderizamos el Footer si no estamos en login */}
        {showLayout && <Footer />}
      </div>
    </>
  )
}

export default App
