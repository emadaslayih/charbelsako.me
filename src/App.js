import React from 'react'

import store from './store'
import { Provider } from 'react-redux'

import Header from './components/common/Header'
import Footer from './components/common/Footer'
import CertificationList from './components/CertificationList'
import Home from './components/Home'
import Contact from './components/Contact'

import { HashRouter, Route, Switch } from 'react-router-dom'

import './App.css'

function App() {
  return (
    <HashRouter>
      <Provider store={store}>
        <Header />
        <Switch>
          <Route exact path="/certification" component={CertificationList} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/" component={Home} />
          {/* <Route component={Home} /> */}
        </Switch>
        <Footer />
      </Provider>
    </HashRouter>
  )
}

export default App
