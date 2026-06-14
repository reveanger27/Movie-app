import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex flex-col items-center justify-center px-6">
      
      <p className="text-blue-200 text-sm font-medium mb-4 tracking-widest uppercase">Selamat Datang</p>
      <h1 className="text-6xl font-bold text-white mb-4 text-center">🎬 MovieApp</h1>
      <p className="text-blue-100 text-xl mb-10 text-center max-w-md">
        Temukan film favorit kamu dari jutaan judul di seluruh dunia
      </p>

      <div className="flex gap-4">
        <Link to ="/movies" 
          className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-full hover:bg-blue-50 transition"
        >
          Cari Film →
        </Link>
        <Link to ="/about" 
          className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-blue-600 transition"
        >
          About
        </Link>
      </div>

      <div className="grid grid-cols-3 gap-6 mt-16 text-center">
        <div>
          <p className="text-4xl font-bold text-white">1000+</p>
          <p className="text-blue-200 text-sm mt-1">Film Tersedia</p>
        </div>
        <div>
          <p className="text-4xl font-bold text-white">Free</p>
          <p className="text-blue-200 text-sm mt-1">Gratis Selamanya</p>
        </div>
        <div>
          <p className="text-4xl font-bold text-white">Fast</p>
          <p className="text-blue-200 text-sm mt-1">Pencarian Cepat</p>
        </div>
      </div>

    </div>
  );
}

export default Home;