import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Profile from './components/Profile'
import HomePage from './HomePage'

const App = () => {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}> </Route>
      <Route path="/profile" element={<Profile/>}> </Route>
    </Routes>
  </BrowserRouter>
);
}

export default App  