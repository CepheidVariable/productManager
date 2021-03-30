import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router } from '@reach/router';
import Details from './components/Details';
import Main from './views/Main';
import Edit from './views/Edit';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <Details path="products/show/:id" />
        <Edit path="products/edit/:id" />
      </Router>
    </div>
  );
}

export default App;
