import './App.css';
import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom';

const LoginPages =React.lazy(() => import('./Pages/LoginPages/LoginPages'));

function App() {
  return (
    <div className="App">
      <HashRouter>
        <React.Suspense>
          <Switch>
            <Route path={"/login"} exact comnponent={LoginPages} ></Route>
          </Switch>
        </React.Suspense>

      </HashRouter>
    </div>
  );
}


export default App;
