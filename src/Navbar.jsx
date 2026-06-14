import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <nav className="bg-white shadow-md px-8 py-2 flex gap-6 items-center">
            <Link to="/" className="font-bold text-blue-600 text-xl mr-auto">🎬 MovieApp</Link>   
            <Link to="/" className="text-gray-600 hover:text-blue-600 font-medium transition">Home</Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-600 font-medium transtion">About</Link>
            <Link to="/movies" className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">Cari Film</Link>
        </nav>
    );
}

export default Navbar;