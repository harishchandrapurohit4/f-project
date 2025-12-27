import { Routes, Route } from "react-router";
import Main from "./components/Main";
import ConfirmedBooking from "./components/ConfirmedBooking";
import Header from "./components/Header";
import Nav from "./components/Nav";

import Footer from "./components/Footer";




function App() {
  return (
  
  



    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/confirmed" element={<ConfirmedBooking />} />
      <Route path="/Nav" element={<Nav />} />
      <Route path="/Header" element={<Header />} />
      <Route path="/Footer" element={<Footer />} />

    </Routes>
  );
}

export default App;
