import React from 'react'
import Header from './header.jsx'
import Navbar from './navbar.jsx'
import Footer from './footer.jsx'
import Body from './body.jsx'
import { Link } from "react-router-dom";


function App() {
  return ( <>
        <Header/>
        <Navbar/>
        <Body/>
        <Footer/>
        </>
   );
}

export default App;