import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Publications from './pages/Publications';
import Talks from './pages/Talks';
import Resources from './pages/Resources';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import CV from './pages/CV';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/talks" element={<Talks />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/categories" element={<Blog />} />
          <Route path="/cv" element={<CV />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
