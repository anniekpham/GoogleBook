import React, {Component} from 'react'
import './App.css'
import Header from './components/header'
import { Switch, Route, Redirect } from 'react-router-dom'
import Saved from './pages/save'
import Search from './pages/search'

class App extends Component {
  state = {
    isSaved: false
  }
  toggleSaved = _ => {
    this.setState({isSaved: true})
  }
  toggleSearch = _ => {
    this.setState({isSaved: false})
  }
  
  render () {
    return (
      <div className="App">
        <Header toggleSearch={this.toggleSearch} toggleSaved={this.toggleSaved}/>
        <Switch>
            <Route exact path="/" component={ () => <Search isSaved={this.state.isSaved} />} />
            <Route path="/Saved" component={ () => <Saved isSaved={this.state.isSaved} />} />
            <Redirect to="/" />
        </Switch>
      </div>
    )
  }
}

export default App
