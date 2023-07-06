import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Team from './components/Team'
import SignIn from './components/Create'

function App() {

  return (
    <Routes>
       <Route path='/login' element={<Login/>}/>
       <Route path='/team' element={<Team/>}/>
       <Route path='/signin' element={<SignIn/>}/>

    </Routes>
  )
}

export default App
