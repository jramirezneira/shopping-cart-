import React, { Component } from 'react'
import ReactDOM from 'react-dom';
//import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './reducers'
import { getAllProducts } from './actions'
import App from './containers/App'
import Pay from './containers/Pay'
import {BrowserRouter, Switch, Route} from 'react-router-dom';





const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

// crea el store de redux
const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)
// cargo los productos

store.dispatch(getAllProducts())



class Root extends Component{
     
    render()
    {
      console.log(this.state)
      
      return(
        <Provider store={store}>
            <BrowserRouter basename={'/'}>
                <Switch>
                    <Route exact path={`${process.env.PUBLIC_URL}/`} component={App}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/carro`} component={Pay}/>
                </Switch>
            </BrowserRouter>
        </Provider>)
     // document.getElementById('root')

    }
}

 ReactDOM.render(<Root/>, document.getElementById('root'));
