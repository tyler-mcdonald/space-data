import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Countdown } from "./components/Countdown";

// components
import { RandomLaunch } from "./components/RandomLaunch";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Countdown />
              <RandomLaunch />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
