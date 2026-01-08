import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Layout from './components/Layout/Layout';
import Biography from './pages/Biography/Biography';
import Book from './pages/Book/Book';
import Contact from './pages/Contact/Contact';


function App() {
  return (
    <BrowserRouter>
      <Layout>
          <Routes>
            <Route path='/'             element={<Home/>}/>
            <Route path='/biography'    element={<Biography/>}/>
            <Route path='/book'         element={<Book/>}/>
            <Route path='/contact'      element={<Contact/>}/>
          </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
