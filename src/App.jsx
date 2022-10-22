import { BrowserRouter,Route,Routes } from 'react-router-dom'

import HomePage from './HomePage'
import {EventForm,Profile,Events} from './components'

const App = () => {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}> </Route>
      <Route path="/profile" element={<Profile/>}> </Route>
      <Route path="/form" element={<EventForm/>}></Route>
      <Route path="/events" element={<Events/>}></Route>
    </Routes>
  </BrowserRouter>
);
}

export default App  