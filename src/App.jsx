import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import RecommendedVideos from './Recommended'
import { BrowserRouter as Router,  Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
      <div className='app__page'>
        <Sidebar />
        <RecommendedVideos />
        
      </div>
    </div>
  )
}

export default App
