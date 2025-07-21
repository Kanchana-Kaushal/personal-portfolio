import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <main className="font-inter mx-auto min-h-screen w-4/5 max-w-3xl text-gray-800">
        <ScrollToTop />
        <Routes>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
