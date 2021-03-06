import React from 'react';
import Home from './Components/Home/Home.js'
import Page2 from './Components/Page2/Page2.js'
import Header from './ThemeComponent/Header/Header.js'
import Content from './ThemeComponent/Content/Content.js'
import SideBar from './ThemeComponent/SideBar/SideBar.js'
import { Router, Route ,Switch} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

let App = () => (
  <div>
    <Header />
    <SideBar />
    <Router history={history}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Page2" component={Page2} />
        </Switch>
    </Router>
  </div>
);

export default App;
