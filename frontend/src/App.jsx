import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components';
import { Home, Semesters, SubjectDetail, PYQs, Resources, Login } from './pages';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/semesters" element={<Semesters />} />
            <Route path="/subject/:id" element={<SubjectDetail />} />
            <Route path="/pyqs" element={<PYQs />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
