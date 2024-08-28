import { Suspense, lazy } from 'react'; 
import './App.css';

const Home = lazy(() => import('./components/Home'));
const NavBar = lazy(() => import('./components/NavBar'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <NavBar />
        <Home />
      </Suspense>
    </div>
  );
}

export default App;
