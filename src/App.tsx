import React from 'react';
import logo from './logo.svg';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link, Redirect
} from "react-router-dom";
import Statistics from "./views/Statistics";
import NoMatch from "./views/NoMatch";
import Tags from "./views/Tags";
import Money from "./views/Money";


function App() {
     return (
         <Router>
                     <Switch>
                         <Route path="/tags">
                             <Tags/>
                         </Route>
                         <Route path="/money">
                             <Money/>
                         </Route>
                         <Route path="/statistics">
                             <Statistics/>
                         </Route>
                         <Redirect exact from="/" to="/money"/>
                         <Route path="*">
                             <NoMatch/>
                         </Route>
                     </Switch>
         </Router>
     );
}

export default App;

