import { createContext } from 'react'

const stub = () => {
  throw new Error('You forgot to wrap your component in AppProvider')
}

export const initialState = {
  drawer: {
    open: false
  },
  profile: {
    username: "",
    position: "",
    email: "",
    password: ""
  },
  notifications: {
    monday: false,
    tuesday: true,
    wednesday: false,
    thursday: false,
    friday: true
  }
}

const initialContext = {
  ...initialState,
  handleDrawerClick: stub,
  handleNotification: stub,
  changeProfileInput: stub
}

const AppContext = createContext(initialContext)

export default AppContext
