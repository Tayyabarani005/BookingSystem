import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lanscape from './Pages/Lanscape';
import TourPage from './Pages/TourPage';
import Tours from './Pages/Tours';
import AddTour from './Pages/AddTour';
import MyTours from './Pages/MyTours';
import TourDetails from './Pages/TourDetails';
function App() {
 

  return (
    <Router>
      <Routes>
        <Route path='/' element = {<Lanscape />}/>
        <Route path="/tour" element={<TourPage />} />
        <Route path='/tours' element={<Tours/>}/>
        <Route path='/addtour' element={<AddTour/>}/>
        <Route path='/mytour' element={<MyTours/>}/>
        <Route path='/tours/:id' element={<TourDetails />} />
      </Routes>
    </Router>
  )
}

export default App
