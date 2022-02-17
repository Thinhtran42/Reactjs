/* eslint-disable no-undef */
import React from 'react';
// import PropTypes from 'prop-types';
import {HashRouter, Route, Switch} from 'react-router-dom';
 
const login = React.lazy(() => import('././../../Component/login/Login.js'))
// LoginPages.propTypes = {
    
// };

function LoginPages(props) {
    return (
        <HashRouter>
            <React.Suspense>
                <Switch>
                    <Route path="/login" component={login} />
                </Switch>
            </React.Suspense>
            
        </HashRouter>
    );
}

export default LoginPages;