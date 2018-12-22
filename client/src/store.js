import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import games from './reducers/gamesReducer'

const reducers = combineReducers({ games })

export default createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
  )