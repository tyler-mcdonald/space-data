import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import { RandomLaunch } from "./components/RandomLaunch";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RandomLaunch />} />
      </Routes>
    </Router>
  );
}

export default App;
