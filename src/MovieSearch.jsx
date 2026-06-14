import { useState } from "react";

function MovieSearch () {
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const searchMovies = async () => {
        if (!query) return;

            setLoading(true);
            setError("");

            const response = await fetch ( `https://www.omdbapi.com/?s=${query}&apikey=a1b29ede`);

            const data = await response.json ();

            if(data.Response === "True") {
                setMovies(data.Search);
            }else {
                setError("Film tidak ditemukan!");
                setMovies([]);
            }

            setLoading(false);

    };

    const resetSearch = () => {
        setQuery("");
        setMovies([]);
        setError(false);
    }



    return (
        <div className="min-h-screen bg-gray-100 py-10 px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">🎬 Cari Film</h2>
        
        <div className="flex gap-2 justify-center mb-6">
            <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            
            onKeyDown={(e) => {   // enter untuk search movies
                if (e.key === "Enter") {
                    searchMovies()  
                }
            }}
            placeholder="Cari film..."
            className="border border-gray-300 rounded-full px-4 py-2 w-80 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <button
            onClick={searchMovies}
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-900 transition"
            >
            Cari
            </button>

            <button
            onClick={resetSearch}
            className="bg-gray-300 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-400 transition"
            >
            Reset
            </button>
        </div>

        {loading && <p className="text-center text-gray-500">Loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        {movies.length > 0 && <p className="text-center text-gray-500 mb-4">Ditemukan {movies.length} film untuk "{query}"</p>}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {movies.map((movie) => (
            <div key={movie.imdbID} className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
                <img src={movie.Poster} alt={movie.Title} className="w-full h-64 object-cover" />
                <div className="p-3">
                <p className="font-semibold text-gray-800 text-sm">{movie.Title}</p>
                <p className="text-gray-400 text-xs">{movie.Year}</p>
                </div>
            </div>
            ))}
        </div>
        </div>
    );

}

export default MovieSearch;
