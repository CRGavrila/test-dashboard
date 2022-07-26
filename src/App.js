import './styles/main.scss'

import { AppProvider } from 'lib/appState'
import { DashboardLayout } from './layouts';

function App() {
  return (
    <AppProvider>
      <DashboardLayout />
    </AppProvider>
  );
}

export default App;
