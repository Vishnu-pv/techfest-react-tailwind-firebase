import { BrowserRouter,Route,Routes } from 'react-router-dom'

import HomePage from './HomePage'
import {EventForm,Profile} from './components'

const App = () => {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}> </Route>
      <Route path="/profile" element={<Profile/>}> </Route>
      <Route path="/form" element={<EventForm/>}></Route>
    </Routes>
  </BrowserRouter>
);
}

export default App  