  
import { useContext } from 'react'
import AppContext from './context'

const useAppState = () => useContext(AppContext)

export default useAppState