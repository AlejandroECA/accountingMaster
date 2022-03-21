import logo from './logo.svg';
import React from 'react'
import { 
  BrowserRouter, 
  Routes, 
  Route,
} from 'react-router-dom'
import { AnimatePresence } from "framer-motion";

//style
import { GlobalStyle } from './styles/AppGolbalStyles'
import back from './data/img/peakpx.jpg'

//Pages
import { Home } from './pages/Home'

//components
import { Header} from './components/headerComponent'


function App() {

  return (
    <BrowserRouter >
      <AnimatePresence exitBeforeEnter initial={true}>
        <GlobalStyle 
          backgroundImage={back} 
          fontColor={'gray'}
          />
        <Header />
        <Routes >
          <Route path='/' element = {<Home />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
