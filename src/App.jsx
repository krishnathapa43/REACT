
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Home from './Home'
import About from './about'
import Contact from './Contact'



//Component :- those function which return jsx is know as component.
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>      
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
