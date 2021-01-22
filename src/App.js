import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Notification from './components/Notification'
import SignInSide from './components/SignInSide'

import CountriesMenu from './components/CountriesMenu'

import storage from './utils/storage'
import { login, logout } from './reducers/user'

const App = () => {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    const user = storage.loadUser()
    if (user) {
      dispatch(login(user))
    }
  }, [dispatch])

  const handleLogout = () => {
    dispatch(logout())
    storage.logoutUser()
  }

  if ( !user ) {
    return (
      <div>
        <SignInSide />
        <h2>Login to application</h2>

        <Notification />
      </div>
    )
  }

  return (
    <>
      <span>
        {user.name} logged in <button onClick={handleLogout}>logout</button>
      </span>
      <Notification />
      <h1>Hello World</h1>
      <CountriesMenu />
    </>
  )
}

export default App