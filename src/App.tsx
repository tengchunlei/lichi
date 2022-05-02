import React from 'react';
import logo from './logo.svg';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link, Redirect
} from "react-router-dom";
import styled from 'styled-components';
import Nav from 'components/Nav';
import Layout from "components/Layout";


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

function Tags() {
    return (
        <Layout>标签页面</Layout>
    )
}

function Statistics() {
    return(
        <Layout>统计页面</Layout>
    );
}

function Money() {
    return (
        <Layout>记账页面</Layout>
    );
}
function NoMatch() {
    return (
        <Layout>页面不存在,请重新输入地址</Layout>
    );
}

export default App;

