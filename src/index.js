import React from 'react';
// import ReactDOM from 'react-dom/client';
import { render } from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './index.css';
import Home from './Pages/Home'
// import Contact from './Pages/Contact'
// import Header from './Components/Header'
import Navbar from './Components/Navbar/Navbar';

import Error from './Components/Error'
import Security from './Components/Security'
import Professional from './Components/Professional'
import Individual from './Components/Individual'


import reportWebVitals from './reportWebVitals';

// Importation de createGlobalStyle
import { createGlobalStyle } from 'styled-components'
import About from './Pages/Contact';

const GlobalStyle = createGlobalStyle`
    div {
        font-family:  Dominik Thin, Montserrat, 'Trebuchet MS', Helvetica, arial, sans-serif;
        
        font-size: 100%
          width: auto;
          height: auto;
        }
`

// Switch est remplacé par Routes dans la V6 de ReactRouterDom
render(
  <BrowserRouter>
    <GlobalStyle />
    <Navbar />
    {/* <Header /> */}
    <Routes>
      {/* Route pour la page d'acceuil */}
      <Route path="/" exact element={<Home />} />

         {/* Route pour la page profesionnel */}
      <Route path="/professional" element={<Professional />} />

     {/* Route pour la page particulier */}
      <Route path="/individual" element={<Individual />} />

      {/* Route pour la page securité */}
     <Route path="/security" element={<Security />} />
 
      {/* Route pour la page contact */}
      <Route path="/about" element={<About />} />

      {/* <Route path="card" element={<Card />} /> */}
      {/* <Route path="/accommodation/:id" element={<Accommodation />}></Route> */}
      {/* you can render a "not found" route using path="*" */}
      <Route path="*" element={<Error />}></Route>
    </Routes>
    {/* <Footer /> */}
  </BrowserRouter>,
  document.getElementById('root')
)


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
