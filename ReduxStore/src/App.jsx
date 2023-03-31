import './App.css'
import { Provider } from 'react-redux'

import store from './utils/store'
import Home from './components/Home'


function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <Home/>
      </Provider>
    </div>
  )
}

export default App
