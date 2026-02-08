
import './App.css';
import { HashRouter as Router, Routes, Route, } from 'react-router-dom';
import { Home } from './pages/home';
import { Info } from './pages/info';
import { Signup } from './pages/signup';
import { Calendar } from './pages/calendar';
import { Events } from './pages/events';
import { Contact } from './pages/contact';
import { Layout } from './Layout';




function App() {


  return (
    

    <main>
      

    <div>


      <Router>
        <Routes>

        <Route element={<Layout/>}>
           {/*all the routes below are child routes to Layout */}
           
          <Route path="/" element={<Home/>} />
          <Route path="/info" element={<Info/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/calendar" element={<Calendar/>} />
          <Route path="/events" element={<Events/>} />
          <Route path="/contact" element={<Contact/>}/>

        </Route>


        </Routes>
      </Router>

    </div>


    </main>
  );
}

export default App;
