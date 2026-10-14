import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { CounterBar } from './components/layout/CounterBar';
import { Footer } from './components/layout/Footer';
import { NextShow } from './components/sections/NextShow';
import { Home } from './pages/Home';
import { ArtistDetail } from './pages/ArtistDetail';

export default function App() {
  return (
    <main className="min-h-screen bg-kriolu-bg text-white flex flex-col">
      <Navbar />

      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artista/:id" element={<ArtistDetail />} />
        </Routes>
      </div>
 <CounterBar />
      <NextShow />     {/* ← aqui */}
      <Footer />
     
    </main>
  );
}