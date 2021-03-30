import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router } from '@reach/router';
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
