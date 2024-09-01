import { Suspense, lazy } from 'react';
import { socials } from './details';
import './App.css';

const Home = lazy(() => import('./components/Home'));
const NavBar = lazy(() => import('./components/NavBar'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <NavBar />
        <Home />
        <Footer socials={socials} />
      </Suspense>
    </div>
  );
}

export default App;
