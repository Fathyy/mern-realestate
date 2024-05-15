import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { About, Home, Profile, Signin, Signup } from './pages'
const App = () => {
  return (
    <BrowserRouter>
    {/* header component */}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/profile' element={<Profile/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App