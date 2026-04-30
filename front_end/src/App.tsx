import { Route, Routes } from 'react-router-dom'
import Home from './pages/Homepage'
import { Navbar } from './components/Navbar';
import './index.css'

function App() {

  return (
    <>
      <div className='min-h-screen bg-slate-50'>
        <Navbar />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </main>
      </div>
    </>
  )
}

export default App
