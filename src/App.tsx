import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from './About';
// const About = lazy(() => import('./About'));
import Home from './Home';
// const Home = lazy(() => import('./Home'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Suspense>
  </Router>
);

export default App;

// offline
// cache
// workbox
// code spliting
// add to home scren A2HS
// mainfest
// https
// subscribe service worker,file js (sw.js) vị trí sao cho khi open page(index.html) có dc page/sw.js
