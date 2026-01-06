import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Layout from './components/Layout/Layout';


function App() {
  //const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Layout>
          <Routes>
            <Route path='/' element={<Home/>}/>
          </Routes>
      </Layout>
    </BrowserRouter>

  )
}

export default App
