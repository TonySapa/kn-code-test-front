import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import notificationReducer from './reducers/notification'
import userReducer from './reducers/user'

const reducer = combineReducers({
  notification: notificationReducer,
  user: userReducer
})

export default createStore(reducer, composeWithDevTools(
  applyMiddleware(thunk)
))