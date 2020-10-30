import React, { useEffect } from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';
import Test from './Test';

const App = () => {
    useEffect(() => {
        // Init Materialize JS
        M.AutoInit();
    });

    return (
        <div className='App'>
            <Test />
        </div>
    );
};

export default App;
