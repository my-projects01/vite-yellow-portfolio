import { Suspense, lazy, useState } from 'react';
import { socials } from './details';
import './App.css';
import { ActivePage } from './types/Other';

const Home = lazy(() => import('./components/Home'));
const NavBar = lazy(() => import('./components/NavBar'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  const [display, setDisplay] = useState<ActivePage>('home');
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <NavBar display={display} setDisplay={setDisplay} />
        <Home display={display} />
        <Footer socials={socials} />
      </Suspense>
    </div>
  );
}

export default App;
