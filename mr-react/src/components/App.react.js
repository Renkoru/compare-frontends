import React from 'react';
import { Switch, BrowserRouter as Router, Route, Link } from 'react-router-dom';

const homeComponent = () => <div>Home</div>;
const dynamicComponent = () => <div>Dynamic content</div>;
const noMatch = () => <div>noMatch</div>;

const App = () => {

    return (
        <Router>
            <div>
                <div>
                    <Link to="/home">Home</Link>
                    <br />
                    <Link to="/dynamic">dynamic</Link>
                    <br />
                    <Link to="/404">404</Link>
                    <br />
                </div>
                <div>
                    <Route exact path="/home" component={homeComponent} />
                    <Route exact path="/dynamic" component={dynamicComponent} />
                    <Route component={noMatch} />
                </div>
            </div>
        </Router>
    );
};

export default App;
