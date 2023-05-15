import "./App.css";
import StudentForm from "./components/create";
import Read from "./components/read";
import Update from "./components/update";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h2>REACT CRUD Student Record</h2>
        <nav>
          <Link to="/read">
            <Button>READ</Button>
          </Link>
          <Link to="/create">
            <Button>CREATE</Button>
          </Link>
        </nav>
        <div style={{ marginTop: 20 }}>
          <Routes>
            <Route path="/create" element={<StudentForm />} />
            <Route path="/read" element={<Read />} />
            <Route path="/update" element={<Update />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
