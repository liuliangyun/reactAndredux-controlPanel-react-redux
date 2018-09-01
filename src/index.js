import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import ControlPanel from './components/control-panel';
import {Provider} from 'react-redux';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <ControlPanel />
    </Provider>,
     document.getElementById('root'));
registerServiceWorker();
