import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
} from "react-router-dom";
import './i18n';

import './index.css';
import AppRouter from './routers/AppRouter';

ReactDOM.render(
    <>
        <Router basename={process.env.PUBLIC_URL} >
            <AppRouter />
        </Router>
    </>,
    document.getElementById('root')
);
