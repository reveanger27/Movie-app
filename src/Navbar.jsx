import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <nav className="bg-white shadow-md px-4 py-2 flex gap-3 items-center">
            <Link to="/" className="font-bold text-blue-600 text-lg mr-auto">🎬 MovieApp</Link>   
            <Link to="/" className="text-gray-600 hover:text-blue-600 font-medium transition text-sm">Home</Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-600 font-medium transition text-sm">About</Link>
            <Link to="/movies" className="bg-blue-600 text-white px-3 py-1.5 rounded-full hover:bg-blue-700 transition text-sm">Cari Film</Link>
        </nav>
    );
}

export default Navbar;