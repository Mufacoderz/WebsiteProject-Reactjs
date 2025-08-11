import Header from './components/home/header/Header'
import './App.css';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { BrowserRouter as Router } from "react-router-dom";

import Homepage from './components/pageContent/Homepage';


function App() {
  return (
   <>
      <Router>
        <Header/>
        <Switch>
            <Route path="/" exact component={Homepage}/>
        </Switch>
      </Router>
   </>
  );
}

export default App;
