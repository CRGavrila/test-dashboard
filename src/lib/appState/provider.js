import React, { useReducer } from 'react'

import AppContext, { initialState } from './context'
import reducer from './reducer'


const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleDrawerClick = (open) => {
    dispatch({ type: 'UPDATE_DRAWER_OPEN', open })
  }

  const handleNotification = (name, value) => {
    dispatch({ type: 'UPDATE_EMAIL_NOTIFICATION', name, value })
  }

  const changeProfileInput = ev => {
    const { target } = ev

    dispatch({ type: 'UPDATE_PROFILE_INPUT', name: target.name, value: target.value })
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        handleDrawerClick,
        handleNotification,
        changeProfileInput
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
