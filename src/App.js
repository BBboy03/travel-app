import './App.css';
import Places from "./components/Places";
import Place from "./components/Place";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import NoMatch from "./components/NoMatch";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Places />} />
          <Route exact path="/place/:id" element={<Place />} />
          <Route exact path="*" element={<NoMatch />} />
          
        </Routes>
      </Router>
    </div>
  )
}

export default App;
