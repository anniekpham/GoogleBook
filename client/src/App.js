import React, {Component} from 'react'
import './App.css'
import Header from './components/header'
import { Switch, Route, Redirect } from 'react-router-dom'
import Saved from './pages/save'
import Search from './pages/search'

class App extends Component {
  render () {
    return (
      <div className="App">
        <Header />
        <Switch>
            <Route exact path="/" component={Search}/>
            <Route path="/Saved" component={Saved} />
            <Redirect to="/" />
        </Switch>
      </div>
    )
  }
}

export default App
