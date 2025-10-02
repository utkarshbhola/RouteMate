import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Create from "./components/create";
import EventDetail from "./components/EventDetail";
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#fefbf6] font-['SUSE_Mono']">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/about" element={<h1 className="p-6">About Page</h1>} />
          <Route path="/events" element={<h1 className="p-6">Events Page</h1>} />
          <Route path="/events/:id" element={<EventDetail />} />
          <Route path="/join" element={<h1 className="p-6">Join Page</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;