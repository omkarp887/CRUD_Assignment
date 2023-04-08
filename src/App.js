import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Create from "./pages/components/Create";
import Update from "./pages/components/Update";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/create-user" element={<Create />} />
          <Route exact path="/edit-user" element={<Update />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
