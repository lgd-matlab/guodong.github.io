import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import Publications from "./pages/Publications";
import CV from "./pages/CV";
import Talks from "./pages/Talks";
import Resources from "./pages/Resources";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/talks" element={<Talks />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </Layout>
  );
}

export default App;
