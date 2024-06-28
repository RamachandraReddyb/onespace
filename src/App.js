import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Todos from "./pages/Todos";
import Layout from "./Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Accordian from "./components/accordian";
import Starring from "./components/starring";
import Slider from "./components/slider";
import Search from "./components/search";
import QRCodeGenerator from "./components/qr-code-generator";
import DashBoard from "./components/hoc";
import FormValidation from "./components/form";
import TicTacToe from "./components/tic-tac-toe";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/todos" element={<Todos />} />
          <Route path="projects/accordian" element={<Accordian />} />
          <Route path="projects/starring" element={<Starring />} />
          <Route path="projects/slider" element={<Slider />} />
          <Route path="projects/search" element={<Search />} />
          <Route path="projects/qrcode" element={<QRCodeGenerator />} />
          <Route path="projects/hoc" element={<DashBoard />} />
          <Route path="projects/form" element={<FormValidation />} />
          <Route path="projects/tic-tac-toe" element={<TicTacToe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
