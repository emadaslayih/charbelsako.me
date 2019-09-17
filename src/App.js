import React from 'react'

import store from './store'
import { Provider } from 'react-redux'

import Header from './components/common/Header'
import Footer from './components/common/Footer'
import CertificationList from './components/CertificationList'
import Home from './components/Home'
import Contact from './components/Contact'

import { BrowserRouter, Route } from 'react-router-dom'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <Route exact path="/certification" component={CertificationList} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/" component={Home} />
        <Footer />
      </Provider>
    </BrowserRouter>
  )
}

export default App
