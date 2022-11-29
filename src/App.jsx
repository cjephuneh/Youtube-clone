import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import RecommendedVideos from './Recommended'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
         <Routes>
            <Route path='/search'>
              <h1>hello</h1>
            </Route>
          </Routes>
      </Router>
      <Header />
      <div className='app__page'>
        <Sidebar />
        <RecommendedVideos />       
      </div>
    </div>
  )
}

export default App
