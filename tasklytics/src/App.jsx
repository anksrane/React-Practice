import './App.css'
import { AppLayout } from './components'
import store from './app/store.js'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';

function App() {
    return (
    <Provider store={store}>
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </Provider>
    )
}

export default App
