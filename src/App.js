import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import ConfirmedBooking from "./components/ConfirmedBooking";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/confirmed" element={<ConfirmedBooking />} />
    </Routes>
  );
}

export default App;
