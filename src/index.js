import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';

import client from './client';

ReactDOM.render(
    <ApolloProvider client={client}>
        <App/>    
    </ApolloProvider>, 
    document.getElementById('root'));

registerServiceWorker();
