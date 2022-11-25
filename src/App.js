import { Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components/layout";
import { Contact, Home, Menu } from "./routes";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
