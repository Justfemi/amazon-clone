import './App.css';
import Header from './Header';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <>
    <Router>
    <div className="app">
      <Router>
        <>
          <Routes>
            <Route exact path="/" component={Header}/>
          </Routes>
        </>
      </Router>
    </div>
    </Router>
    </>
  );
}

export default App;
