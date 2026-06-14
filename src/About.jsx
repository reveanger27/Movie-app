function About() {
    return (
        <div className="min-h-screen bg-gray-100 py-16 px-6">
            <div className="max-w-2x1 mx-auto text-center">
                
                <div className="w-24 h-24 bg-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-4x1">👨‍💻</span>
                </div>

            
                <h1 className="text-4x1 font-bold text-gray-800 mb-4">Halo gw Punda Setiawan</h1>
                <p className="text-gray-500 text-1g mb-8">
                    Gw lagi belajar jadi frontend Developer.
                    Project ini gw bikin untuk latihan Reactm tailwind, dan fetch API.
                </p>

                <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="bg-white rounded-x1 p-4 shadow">
                        <p className="text-2x1 font-bold text-blue-600">React</p>
                        <p className="text-gray-400 tex-sm">Styling</p>
                    </div>
                    <div className="bg-white rounded-x1 p-4 shadow">
                        <p className="text-2x1 font-bold text-blue-600">Tailwind</p>
                        <p className="text-gray-400 text-sm">Styling</p>
                    </div>
                    <div className="bg-white rounded-x1 p-4 shadow">
                        <p className="text-2x1 font-bold text-blue-600">OMDB</p>
                        <p className="text-gray-400 text-sm">API</p>
                    </div>
                </div>

                <a
                    href="./"
                    className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition font-semibold"
                >
                    Lihat Project→
                </a>    
            </div>
        </div>    
    );
}

export default About;