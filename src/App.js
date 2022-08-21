import logo from './logo.svg';
import './App.css';
import Navigationbar from './components/Navigationbar';
import Footer from './components/Footer';
import Viewstudent from './components/Viewstudent';
import { Container } from 'react-bootstrap'
import Student from './components/Student';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigationbar />
        <Container>
          <Routes>
            <Route path="/addStudent" element={<Student/>} />
            <Route path="/Viewstudents" element={<Viewstudent/>} />
          </Routes>
        </Container>
      </BrowserRouter>
      <Footer />

    </div>
  );
}

export default App;
