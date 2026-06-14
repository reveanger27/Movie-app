import Navbar from './Navbar';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from './Home';
import About from "./About";

import Greeting from './greeting';
import Counter from './Counter';
import Users from './Users';
import Timer from './Timer';
import MovieSearch from './MovieSearch';

function App () {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path ="/" element={<Home />} />
        <Route path ="/about" element={<About />} />
        <Route path ="/movies" element={<MovieSearch />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;