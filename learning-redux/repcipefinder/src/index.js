import React from 'react';
import ReactDOM from 'react-dom';

// Routing
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

// Components
import App from './components/App';
import FavoriteRecipeList from './components/FavoriteRecipeList';

const store = createStore(rootReducer);


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={App} />
                <Route path='/favorites' component={FavoriteRecipeList} />
            </Switch>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
