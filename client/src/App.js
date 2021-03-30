import { Router } from '@reach/router';
import './App.css';
import Details from './components/Details';
import Main from './views/Main';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <Details path="people/:id" />
      </Router>
    </div>
  );
}

export default App;
