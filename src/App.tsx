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
import styled from "styled-components";
import {Tag} from "./views/Tag";

const AppWrapper= styled.div`
color:#333;
`
function App() {
     return (
         <AppWrapper>
         <Router>
                     <Switch>
                         <Route exact path="/tags">
                             <Tags/>
                         </Route>
                         <Route exact path="/tags/:tag">
                             <Tag/>
                         </Route>


                         <Route exact path="/money">
                             <Money/>
                         </Route>
                         <Route exact path="/statistics">
                             <Statistics/>
                         </Route>
                         <Redirect exact from="/" to="/money"/>
                         <Route path="*">
                             <NoMatch/>
                         </Route>
                     </Switch>
         </Router>
         </AppWrapper>
     );
}

export default App;

