import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './Pages/Home';
import Exercise1 from './Pages/Exercise1';
import Exercise2 from './Pages/Exercise2';
import Exercise3 from './Pages/Exercise3';
import Exercise4 from './Pages/Exercise4';
import Exercise5 from './Pages/Exercise5';
import Exercise6 from './Pages/Exercise6';
import Exercise7 from './Pages/Exercise7';
import Exercise8 from './Pages/Exercise8';


function RoutesApp() {
   return (
      <Router>
         <Routes>
            <Route path='/' element={<App />}>
               <Route path='' element={<Home />} />
               <Route path='exercise-1' element={<Exercise1 />} />
               <Route path='exercise-2' element={<Exercise2 />} />
               <Route path='exercise-3' element={<Exercise3 />} />
               <Route path='exercise-4' element={<Exercise4 />} />
               <Route path='exercise-5' element={<Exercise5 />} />
               <Route path='exercise-6' element={<Exercise6 />} />
               <Route path='exercise-7' element={<Exercise7 />} />
               <Route path='exercise-8' element={<Exercise8 />} />
            </Route>
         </Routes>
      </Router>
   )
}

export default RoutesApp;