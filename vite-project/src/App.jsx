import react from 'react';
import Home from './Components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

import '@fortawesome/fontawesome-free/css/all.min.css';
import Cards from './Components/Cards';
import Sidebar from './Components/Sidebar';
import Data from './Components/Data';



function App() {
  return (
  <>
  
  <Home/>
   <div className="d-flex">
   <Sidebar/>
   <Cards/>
  <div className="flex-grow-2">
  
 
  <div className="container mt-3">
 
 </div>
 </div>
 </div>
  </>
  );
}

export default App;
