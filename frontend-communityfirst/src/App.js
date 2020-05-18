import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import './App.css';
import Home from "./component/home/Home";
import LoginPage from "./component/auth/LoginPage";
import RegisterPage from "./component/auth/RegisterPage";
import Auth from "./services/Auth";
import Main from "./component/layout/Main";
import Location from "./component/location/Location";
import CoronaPage from "./component/coronaTracker/CoronaPage";
import AboutPage from "./component/about/AboutPage";


function App() {

    return (
        <Router>
            <Switch>
                <Redirect exact from="/" to="/communityfirst"/>
                <Route exact path="/communityfirst">
                    <Home/>
                </Route>

                <Route exact path="/communityfirst/covid">
                    <CoronaPage/>
                </Route>

                <Route exact path="/communityfirst/about">
                    <AboutPage/>
                </Route>

                <Route path="/login" render={() =>
                    !Auth.isLoggedIn() ? (<LoginPage/>) : (<Redirect to="/communityfirst/selection"/>)
                }/>
                <Route path="/communityfirst/selection" render={() =>
                    Auth.isLoggedIn() ? (<Location/>) : (<Redirect to="/"/>)
                }/>
                <Route path="/signup" render={(props) => <RegisterPage {...props}/>}/>
                <Route path="/communityfirst/se"
                       render={() => Auth.isLoggedIn() ? (<Main/>) : (<Redirect to="/"/>)
                       }/>
            </Switch>
        </Router>
    )
}

export default App;
