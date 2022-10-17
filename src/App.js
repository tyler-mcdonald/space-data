import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";

// components
import { RandomLaunch } from "./components/RandomLaunch";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<RandomLaunch />} />
      </Routes>
    </Router>
  );
}

export default App;
